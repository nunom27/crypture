"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';
import {
    SparklesIcon,
  } from '@heroicons/react/24/solid'
  import {
    ArrowRightIcon,
  } from '@heroicons/react/24/outline'

function Bot() {

    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [selectedRisk, setSelectedRisk] = useState('');
    const [selectedCapital, setSelectedCapital] = useState('');

    return (
        <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
            <div className="text-mtitle leading-tight font-extrabold">Crypture Bot</div>
            <div className='flex flex-row w-full gap-[10px]'>
                <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                        <div className='flex flex-row mt-[8px]'>
                            <SparklesIcon className='w-[20px] h-[20px] text-black mr-[6px]'></SparklesIcon>
                            <span className="text-black text-text font-bold">BOT BALANCE</span>
                        </div>
                    <span className='text-ltitle font-extrabold'>assets$</span>
                    <span className='text-text font-medium mt-[5px] opacity-50'>This is the capital that's currently in the hands of Crypture Bot.</span>
                </div>
                <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                        <div className='flex flex-row mt-[8px]'>
                            <SparklesIcon className='w-[20px] h-[20px] text-black mr-[6px]'></SparklesIcon>
                            <span className="text-black text-text font-bold">BOT COIN</span>
                        </div>
                        <div className='flex flex-row'>
                            <span className='text-ltitle font-extrabold'>value</span>
                            <span className='text-ltitle font-medium'>abbreviation</span>
                        </div>
                    <span className='text-text font-medium mt-[5px] opacity-50'>This is the coin Crypture Bot is currently handling.</span>
                </div>
            </div>
            <div className='flex flex-row mt-[8px]'>
                <ArrowRightIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></ArrowRightIcon>
                <span className="text-purple-200 text-text font-medium">Check your wallet</span>
            </div>
            <div className='w-full flex flex-col justify-left gap-[2px]'>
                <div className='bg-black w-full h-[1.5px] opacity-10 my-[10px]'></div>
                <div className='text-text font-extrabold opacity-50'>NEW INVESTMENT</div>
                <div className='text-text font-medium opacity-50'>Create a new investment with Crypture Bot. If you have a current investment, your Bot Wallet balance will be transferred back to your Account Wallet balance.</div>
            </div>
            <form className='w-full flex flex-col gap-[15px] items-start'>
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
                <span className='text-header font-extrabold mt-[10px]'>How much would you like to commit to Crypture Bot?</span>
                <div className='flex flex-row justify-start items-start'>
                    <span className='text-ltitle'>$</span>
                    <input 
                        type="number"
                        value={selectedCapital}
                        onChange={e => setSelectedCapital(e.target.value)}
                        min="0"
                        max="10000" 
                        className='outline-none border-b-[1.5px] w-[300px] text-ltitle'></input>
                </div>
                <span className='text-text font-medium mt-[5px] opacity-50'>Your capital is at risk. You're commiting this money to be managed by Crypture bot. You can take it out at any time.</span>
                <button 
                    type="submit"
                    className='w-[200px] px-[16px] py-[10px] bg-purple-200 rounded-[10px] text-white text-text mt-[20px]'
                >Done</button>
            </form>
            <div className='w-full flex flex-col gap-[2px]'>
                <div className='bg-black w-full h-[1.5px] opacity-10 my-[10px]'></div>
                <div className='text-text font-extrabold opacity-50'>PAUSE THIS INVESTMENT</div>
                <div className='text-text font-medium opacity-50'>Stops all Crypture Bot actions while keeping the cyrptocurrency in the Bot Wallet.</div>
                <button 
                className='w-[200px] px-[16px] py-[10px] bg-gray-500 rounded-[10px] text-white text-text mt-[20px]'
            >Pause now</button>
            </div>
            <div className='w-full flex flex-col gap-[2px]'>
                <div className='bg-black w-full h-[1.5px] opacity-10 my-[10px]'></div>
                <div className='text-text font-extrabold opacity-50'>RESUME THIS INVESTMENT</div>
                <div className='text-text font-medium opacity-50'>Resumes Crypture Bot actions with the cyrptocurrency currently stored the Bot Wallet.</div>
                <button 
                className='w-[200px] px-[16px] py-[10px] bg-gray-500 rounded-[10px] text-white text-text mt-[20px]'
            >Pause now</button>
            </div>
            <div className='w-full flex flex-col gap-[2px]'>
                <div className='bg-black w-full h-[1.5px] opacity-10 my-[10px]'></div>
                <div className='text-text font-extrabold opacity-50'>STOP THIS INVESTMENT</div>
                <div className='text-text font-medium opacity-50'>Transfers your bot balance back to your account balance as soon as you delete your investment with Crypture Bot. You can start a new one at any time.</div>
                <button 
                className='w-[200px] px-[16px] py-[10px] bg-red-300 rounded-[10px] text-white text-text mt-[20px]'
            >Stop now</button>
            </div>
        </div>
    );
}

export default Bot;
