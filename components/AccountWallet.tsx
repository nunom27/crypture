"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';
import {
    CurrencyDollarIcon,
    CircleStackIcon
  } from '@heroicons/react/24/solid'

function AccountWallet() {
    return (
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
    );
}

export default AccountWallet;