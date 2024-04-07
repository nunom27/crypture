"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';

function Bot() {

  const [selectedCrypto, setSelectedCrypto] = useState('');

  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
      <div className="text-mtitle leading-tight font-extrabold">Crypture Bot</div>
      <form>
        <span className='text-header font-extrabold'>Choose a cryptocurrency</span>
        <div 
        onClick={() => setSelectedCrypto('crypto1')}
        style={{backgroundColor: selectedCrypto === 'crypto1' ? 'lightgray' : 'white'}}
        >
          <label>Crypto 1</label>
        </div>
        <div 
        onClick={() => setSelectedCrypto('crypto2')}
        style={{backgroundColor: selectedCrypto === 'crypto2' ? 'lightgray' : 'white'}}
        >
          <label>Crypto 2</label>
        </div>
        <div 
        onClick={() => setSelectedCrypto('crypto3')}
        style={{backgroundColor: selectedCrypto === 'crypto3' ? 'lightgray' : 'white'}}
        >
          <label>Crypto 3</label>
        </div>
      </form>
    </div>
  );
}

export default Bot;
