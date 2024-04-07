"use client";
import { Sanchez } from 'next/font/google';
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';
import {
    CurrencyDollarIcon,
    CircleStackIcon,
  } from '@heroicons/react/24/solid'


function Wallet() {
    const [selectedWallet, setSelectedWallet] = useState('');
    return(
        <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
             <div className="text-mtitle leading-tight font-extrabold gap-[15px]">Wallet</div>
             <div className="flex flex-row gap-[10px]">
                <div 
                    onClick={() => setSelectedWallet('accountwallet')}
                    style={{backgroundColor: selectedWallet === 'accountwallet' ? '#901BC7' : '#F3F4F6',
                            color: selectedWallet === 'accountwallet' ? '#FFFFFF' : '#000000'}}
                    className='w-auto h-[50px] px-[16px] rounded-[25px] flex flex-col items-center justify-center text-text'
                >
                    <span className='text-text font-bold'>Account Wallet</span>
                </div>
                <div 
                    onClick={() => setSelectedWallet('botwallet')}
                    style={{backgroundColor: selectedWallet === 'botwallet' ? '#901BC7' : '#F3F4F6',
                            color: selectedWallet === 'botwallet' ? '#FFFFFF' : '#000000'}}
                    className='w-auto h-[50px] px-[16px] rounded-[25px] flex flex-col items-center justify-center text-text'
                >
                    <span className='text-text font-bold'>Bot Wallet</span>
                </div>
            </div>

            <div className='flex flex-row w-full gap-[10px]'>
                    <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                            <div className='flex flex-row mt-[8px]'>
                                <CurrencyDollarIcon className='w-[20px] h-[20px] text-black mr-[6px]'></CurrencyDollarIcon>
                                <span className="text-black text-text font-bold">ACCOUNT BALANCE</span>
                            </div>
                        <span className='text-ltitle font-extrabold'>assets$</span>
                        <span className='text-text font-medium mt-[5px] opacity-50'>This is the combined value in USD of all your cryptocurrency.</span>
                    </div>
                    <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                        <div className='flex flex-row mt-[8px]'>
                            <CircleStackIcon className='w-[20px] h-[20px] text-black mr-[6px]'></CircleStackIcon>
                            <span className="text-black text-text font-bold">ACCOUNT ASSETS</span>
                        </div>
                        <div className='flex flex-row justify-start items-center mt-[10px]'>
                            <div className='bg-black size-[50px] rounded-[50%] mr-[15px]'></div>
                            <div>
                                <span className='font-bold text-headline'>value</span>
                                <span className='font-medium text-headline'>abbreviation</span>
                                <br></br>
                                <span className='font-medium text-text opacity-50'>coin name</span>
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center mt-[10px]'>
                            <div className='bg-black size-[50px] rounded-[50%] mr-[15px]'></div>
                            <div>
                                <span className='font-bold text-headline'>value</span>
                                <span className='font-medium text-headline'>abbreviation</span>
                                <br></br>
                                <span className='font-medium text-text opacity-50'>coin name</span>
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-center mt-[10px]'>
                            <div className='bg-black size-[50px] rounded-[50%] mr-[15px]'></div>
                            <div>
                                <span className='font-bold text-headline'>value</span>
                                <span className='font-medium text-headline'>abbreviation</span>
                                <br></br>
                                <span className='font-medium text-text opacity-50'>coin name</span>
                            </div>
                        </div>
                    </div>
                </div>

             <span className='text-header font-bold'>Transaction History</span>
        </div>
        );
}
export default Wallet;



