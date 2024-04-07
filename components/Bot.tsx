"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';

function Bot() {

    const [selectedCrypto, setSelectedCrypto] = useState('');

    return (
        <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
            <div className="text-mtitle leading-tight font-extrabold">Crypture Bot</div>
            <form className='w-full'>
                <span className='text-header font-extrabold'>Choose a cryptocurrency</span>
                <div className="flex flex-wrap w-full gap-[10px]">
                    <div 
                    onClick={() => setSelectedCrypto('crypto1')}
                    style={{backgroundColor: selectedCrypto === 'crypto1' ? '#E5E7EB' : '#F3F4F6'}; {}}
                    className='w-[120px] h-[100px]'
                    >
                        <label>Crypto 2</label>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('crypto2')}
                    style={{backgroundColor: selectedCrypto === 'crypto2' ? 'lightgray' : '#F3F4F6'}}
                    className='w-[120px] h-[100px]'
                    >
                        <label>Crypto 2</label>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('crypto3')}
                    style={{backgroundColor: selectedCrypto === 'crypto3' ? 'lightgray' : '#F3F4F6'}}
                    className='w-[120px] h-[100px]'
                    >
                        <label>Crypto 3</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Bot;
