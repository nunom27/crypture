"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';

function Bot() {

    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [selectedRisk, setSelectedRisk] = useState('');
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
            <div className="text-mtitle leading-tight font-extrabold">Crypture Bot</div>
            <form className='w-full flex flex-col gap-[15px]'>
                <span className='text-header font-extrabold'>Choose a cryptocurrency</span>
                <div className="flex flex-wrap w-full gap-[10px]">
                    <div 
                    onClick={() => setSelectedCrypto('crypto1')}
                    style={{backgroundColor: selectedCrypto === 'crypto1' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'crypto1' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>BTC</span>
                        <span>Bitcoin</span>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('crypto2')}
                    style={{backgroundColor: selectedCrypto === 'crypto2' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'crypto2' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>ETH</span>
                        <span>Ethereum</span>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('crypto3')}
                    style={{backgroundColor: selectedCrypto === 'crypto3' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'crypto3' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>SOL</span>
                        <span>Solana</span>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('crypto4')}
                    style={{backgroundColor: selectedCrypto === 'crypto4' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'crypto4' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>DOGE</span>
                        <span>Dogecoin</span>
                    </div>
                </div>
                <span className='text-header font-extrabold mt-[10px]'>Choose a risk</span>
                <div className="flex flex-wrap w-full gap-[10px]">
                    <div 
                    onClick={() => setSelectedRisk('risklow')}
                    style={{backgroundColor: selectedRisk === 'risklow' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedRisk === 'risklow' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start'
                    >
                        <span className='text-text font-bold'>Low risk</span>
                        <span>Description</span>
                        <span className='mt-[15px]'><span className='text-text font-bold'>Performance: </span>percentage</span>
                    </div>
                    <div 
                    onClick={() => setSelectedRisk('riskavg')}
                    style={{backgroundColor: selectedRisk === 'riskavg' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedRisk === 'riskavg' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start'
                    >
                        <span className='text-text font-bold'>Average risk</span>
                        <span>Description</span>
                        <span className='mt-[15px]'><span className='text-text font-bold'>Performance: </span>percentage</span>
                    </div>
                    <div 
                    onClick={() => setSelectedRisk('riskhigh')}
                    style={{backgroundColor: selectedRisk === 'riskhigh' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedRisk === 'riskhigh' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start'
                    >
                        <span className='text-text font-bold'>High risk</span>
                        <span>Description</span>
                        <span className='mt-[15px]'><span className='text-text font-bold'>Performance: </span>percentage</span>
                    </div>
                </div>
                <span className='text-header font-extrabold mt-[10px]'>How much would you like to invest?</span>
                <input 
                  type="number" 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  size={inputValue.length > 0 ? inputValue.length : 1}
                  className='outline-none border-b-[1.5px] w-auto'>

                </input>
            </form>
        </div>
    );
}

export default Bot;
