"use client";
// TradingViewWidget.jsx
import { useState, useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const [selectedCurrency, setSelectedCurrency] = useState('BTCUSD');
  const chartContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove the old iframe
    while (chartContainer.current && chartContainer.current.firstChild) {
      chartContainer.current.firstChild.remove();
    }
  
    // Create a new script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "autosize": true,
      "symbol": selectedCurrency,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "save_image": false,
      "allow_symbol_change": true,
      "enable_publishing": false,
      "calendar": true,
      "support_host": "https://www.tradingview.com"
    });
  
    // Append the new script to the chart container
    chartContainer.current?.appendChild(script);
  }, [selectedCurrency]);

  return (
    <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
      <div className='flex flex-col gap-3 my-6'>
        <span className='text-header font-bold'>Choose the cryptocurrency:</span>
        <select className='w-40 h-auto px-4 py-2 rounded-[15px]' value={selectedCurrency} onChange={e => setSelectedCurrency(e.target.value)}>
          <option value="BTCUSD">BTCUSD</option>
          <option value="BTCUSDT">BTCUSDT</option>
          <option value="ETHUSD">ETHUSD</option>
          <option value="ETHUSDT">ETHUSDT</option>
          <option value="SOLUSD">SOLUSD</option>
          <option value="SOLUSDT">SOLUSDT</option>
          <option value="DOGEUSD">DOGEUSD</option>
          <option value="DOGEUSDT">DOGEUSDT</option>
        </select>
      </div>
      <div ref={chartContainer} className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%"}}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
