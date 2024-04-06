"use client";
// TradingViewWidget.jsx
import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "100%",
          "autosize": true,
          "symbol": "BINANCE:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "save_image": false,
          "allow_symbol_change": true,
          "enable_publishing": false,
          "allow_symbol_change": false,
          "calendar": true,
          
          "support_host": "https://www.tradingview.com"
        }`;
        container.current?.appendChild(script);

        return () => {
          container.current?.removeChild(script);
        }
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%"}}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
