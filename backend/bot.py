import time
import requests 
import json
import urllib.request


walletBotUrlUpdate = 'http://10.14.0.31:5000/update_bot'

def calculatersi(data, window_size):
    deltas = [float(data[i + 1][4]) - float(data[i][4]) for i in range(len(data) - 1)]

    up_changes = [delta for delta in deltas if delta >= 0]
    down_changes = [-delta for delta in deltas if delta < 0]

    avg_gain = sum(up_changes[:window_size]) / window_size
    avg_loss = sum(down_changes[:window_size]) / window_size

    rs_values = []
    rsi_values = []

    if avg_loss != 0:
        rs = avg_gain / avg_loss
        rsi = 100 - (100 / (1 + rs))
    else:
        rs = 0
        rsi = 100

    rsi_values.append(rsi)

    for i in range(window_size, len(data) - 1):
        delta = deltas[i - 1]
        if delta >= 0:
            avg_gain = ((avg_gain * (window_size - 1)) + delta) / window_size
            avg_loss = (avg_loss * (window_size - 1)) / window_size
        else:
            avg_gain = (avg_gain * (window_size - 1)) / window_size
            avg_loss = ((avg_loss * (window_size - 1)) - delta) / window_size

        if avg_loss != 0:
            rs = avg_gain / avg_loss
            rsi = 100 - (100 / (1 + rs))
        else:
            rs = 0
            rsi = 100

        rsi_values.append(rsi)

    return rsi_values

def calcular_media_total(array):
    if not array:
        return 0  # Retorna 0 se o array estiver vazio para evitar divisão por zero
    total = sum(array)
    media = total / len(array)
    return media
  
def calcular_media_ultimos_20(array):
    if len(array) < 20:
        return 0  # Retorna 0 se houver menos de 20 elementos no array
    ultimos_20 = array[-20:]  # Seleciona os últimos 20 elementos do array
    media = sum(ultimos_20) / len(ultimos_20)
    return media
  
def converterParaMercado(valor_em_dolares, valor_bitcoin_em_dolares):
    quantidade_de_bitcoins = valor_em_dolares / valor_bitcoin_em_dolares
    return quantidade_de_bitcoins
  
def converterParaDolar(quantidade_de_bitcoins, valor_bitcoin_em_dolares):
    valor_em_dolares = quantidade_de_bitcoins * valor_bitcoin_em_dolares
    return valor_em_dolares

#----------------------------------------//----------------------------------------------------------------------
#----------------------------------------//----------------------------------------------------------------------
#----------------------------------------//----------------------------------------------------------------------

#inputValue = ''+

walletBotUrl = 'http://10.14.0.31:5000/get_bot'
walletBotData = requests.get(walletBotUrl).json()



balanceUSD = walletBotData["balance_fiat"]
balanceBTC = walletBotData["balance_crypto"]
market = walletBotData["coin"]
riskToInvest = walletBotData["risk"]
statusBool = walletBotData["status"]


marketbinance = market + 'USDT'

tick_interval = '1s'
coinVirtualValue = 0
ultimaMediaRsi = 0
ultima20Rsi = 0



urlValue = 'https://api.uphold.com/v0/ticker/'+ market +'-USD'
urlStat = 'https://api.binance.com/api/v3/klines?symbol='+marketbinance+'&interval='+tick_interval+'&limit=1000'
granularity = 10 #[60 = "1min", 300 = "5min", 900 = "15min", 3600 = "1h", 21600 = "6h", 86400 = "1d"]

urlTransaction = 'http://10.14.0.31:5000/add_transaction'

while True:
  if walletBotData["coin"] != market:
    market = walletBotData["coin"]
    ultimaMediaRsi = 0
    ultima20Rsi = 0
    coinVirtualValue = 0
  granularity = 10
  balanceUSD = walletBotData["balance_fiat"]
  balanceBTC = walletBotData["balance_crypto"]
  statusBool = walletBotData["status"] == "active"
  walletBotData = requests.get(walletBotUrl).json()
  time.sleep(1)
  while statusBool:
    statusBool = walletBotData["status"] == "active"
    walletBotData = requests.get(walletBotUrl).json()
    riskToInvest = walletBotData["risk"]
    dataStats = requests.get(urlStat).json()
    dataValue = requests.get(urlValue).json()
    rsiData = calculatersi(dataStats,20)
    rsiMediaTotal = calcular_media_total(rsiData)
    rsiMediaUltimos20 = calcular_media_ultimos_20(rsiData)
    
    if (ultima20Rsi == 0):
      ultima20Rsi = rsiMediaUltimos20
    if (ultimaMediaRsi == 0):
      ultimaMediaRsi = rsiMediaTotal
    
    mediaTotal = 50
    if (ultima20Rsi != rsiMediaUltimos20):
      media20 = (rsiMediaUltimos20 + ultima20Rsi)/2
      mediaTotal = ((rsiMediaTotal + ultimaMediaRsi)/2 + media20)/2
          
    try:
      print('bitcoin value: '+ str(dataValue['ask']))
      coinVirtualValue = float(dataValue['ask'])
    except:
      coinVirtualValue = coinVirtualValue
    
    requests.post(walletBotUrlUpdate, json = {'balance_crypto': balanceBTC})
    requests.post(walletBotUrlUpdate, json = {'balance_fiat': balanceUSD})
    if (riskToInvest == 0):
      granularity = 900
      tick_interval = '1h'
      if (mediaTotal > 70 and balanceBTC != 0):
        traded = converterParaDolar(balanceBTC,coinVirtualValue)
        balanceUSD = traded + balanceUSD
        balanceBTC = 0
        empty_transaction = {
        "from": market,
        "to": "USD",
        "amount": traded,
        "rate": coinVirtualValue
        }
        requests.post(walletBotUrlUpdate, json = empty_transaction )
      if (mediaTotal < 30 and balanceUSD != 0):
        traded = converterParaMercado(balanceUSD,coinVirtualValue)
        balanceBTC = traded + balanceBTC
        balanceUSD = 0
        empty_transaction = {
        "from": "USD",
        "to": market,
        "amount": traded,
        "rate": coinVirtualValue
        }
        requests.post(urlTransaction, json = empty_transaction )
    if (riskToInvest == 1):
      granularity = 600
      tick_interval = '15m'
      if (mediaTotal > 60 and balanceBTC != 0):
        traded = converterParaDolar(balanceBTC,coinVirtualValue)
        balanceUSD = traded + balanceUSD
        balanceBTC = 0
        empty_transaction = {
        "from": market,
        "to": "USD",
        "amount": traded,
        "rate": coinVirtualValue
        }
        requests.post(urlTransaction, json = empty_transaction )
      if (mediaTotal < 40 and balanceUSD != 0):
        traded = converterParaMercado(balanceUSD,coinVirtualValue)
        balanceBTC = traded + balanceBTC
        balanceUSD = 0
        empty_transaction = {
        "from": "USD",
        "to": market,
        "amount": traded,
        "rate": coinVirtualValue
        }
        requests.post(urlTransaction, json = empty_transaction )
    if (riskToInvest == 2):
      granularity = 25
      tick_interval = '1m'
      if (mediaTotal > 55 and balanceBTC != 0):
        traded = converterParaDolar(balanceBTC,coinVirtualValue)
        balanceUSD = traded + balanceUSD
        balanceBTC = 0
        empty_transaction = {
        "from": market,
        "to": "USD",
        "amount": traded,
        "rate": coinVirtualValue
        }
        requests.post(urlTransaction, json = empty_transaction )
      if (mediaTotal < 45 and balanceUSD != 0):
        traded = converterParaMercado(balanceUSD,coinVirtualValue)
        balanceBTC = traded + balanceBTC
        balanceUSD = 0
        empty_transaction = {
        "from": "USD",
        "to": market,
        "amount": traded,
        "rate": coinVirtualValue
        }
        requests.post(urlTransaction, json = empty_transaction )
       
    print('Media total: ' + str(mediaTotal))
    print('balance em USD: ' + str(balanceUSD) + ', balance em ' + str(market) + ': ' + str(balanceBTC))
    time.sleep(granularity) 
    textoFinalUS = {'balance': 100, 'coin':'USD'}
    textoFinalMarket = {'balence':0, 'coin':market}
  
    