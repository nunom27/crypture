import time
import requests 
import json
import urllib.request



def calculate_rsi(data, window_size):
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

    rs_values.append(rs)
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

        rs_values.append(rs)
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

#----------------------------------------//----------------------------------------------------------------------
#----------------------------------------//----------------------------------------------------------------------
#----------------------------------------//----------------------------------------------------------------------

#inputValue = ''+


market = 'BTC'
marketbinance = market + 'USDT'
tick_interval = '10m'
balanceUSD = 100
balanceBTC = 0
riskToInvest = 0.5

urlValue = 'https://api.uphold.com/v0/ticker/USD'
urlStat = 'https://api.binance.com/api/v3/klines?symbol='+marketbinance+'&interval='+tick_interval+'&limit=1000'
granularity = 10 #[60 = "1min", 300 = "5min", 900 = "15min", 3600 = "1h", 21600 = "6h", 86400 = "1d"]
short, long = 9, 25 #RSI short and RSI long


ultimaMediaRsi = 0
ultima20Rsi = 0

while True:
    dataStats = requests.get(urlStat).json()
    dataValue = requests.get(urlValue).json()
    rsiData = calculate_rsi(dataStats,20)
    rsiMediaTotal = calcular_media_total(rsiData)
    rsiMediaUltimos20 = calcular_media_ultimos_20(rsiData)
    print('Media total: ' + str(rsiMediaTotal))
    print('Media recente: ' + str(rsiMediaUltimos20))
    
    if (ultima20Rsi == 0):
	    ultima20Rsi = rsiMediaUltimos20
    if (ultimaMediaRsi == 0):
      ultimaMediaRsi = rsiMediaTotal
    
    if (ultima20Rsi != rsiMediaUltimos20):
      mediaTotal = (rsiMediaTotal + rsiMediaUltimos20)/2
    
    print('bitcoin value: '+ str(dataValue[42]['ask']))
    
    textoFinalUS = {'balance': 100, 'coin':'USD'}
    textoFinalMarket = {'balence':1, 'coin':market}
    
    urlPush = 'http://10.14.0.31:5000/update_balance'
    requests.post(urlPush, json = textoFinalUS)
    requests.post(urlPush, json = textoFinalMarket)
    
    time.sleep(granularity)