"use client";
import { Sanchez } from 'next/font/google';
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';
import {
    CurrencyDollarIcon,
    CircleStackIcon,
  } from '@heroicons/react/24/solid'

function Wallet() {
    return(
        <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
             <div className="text-mtitle leading-tight font-extrabold gap-[15px]">Wallet</div>
             <div className='flex flex-row w-full gap-[10px]'>
                <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                        <div className='flex flex-row mt-[8px]'>
                          <CurrencyDollarIcon className='w-[20px] h-[20px] text-black mr-[6px]'></CurrencyDollarIcon>
                          <span className="text-black text-text font-extrabold">YOUR BALANCE</span>
                        </div>
                    <span className='text-ltitle font-extrabold'>assets$</span>
                    <span className='text-text font-medium mt-[5px] opacity-50'>This is the combined value in USD of all your cryptocurrency.</span>
                </div>
                <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                    <div className='flex flex-row mt-[8px]'>
                        <CircleStackIcon className='w-[20px] h-[20px] text-black mr-[6px]'></CircleStackIcon>
                        <span className="text-black text-text font-extrabold">YOUR ASSETS</span>
                    </div>

                </div>
             </div>
        </div>
        );
}
export default Wallet;