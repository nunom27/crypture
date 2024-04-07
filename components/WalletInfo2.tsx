"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SparklesIcon } from '@heroicons/react/24/solid'

import {
    PlusIcon,
    MinusIcon,
    ArrowRightIcon
  } from '@heroicons/react/24/outline'

function WalletInfo2() {
  return(
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
        <div className='flex flex-row w-full gap-[10px]'>
            <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                    <div className='flex flex-row mt-[8px]'>
                        <SparklesIcon className='w-[20px] h-[20px] text-black mr-[6px]'></SparklesIcon>
                        <span className="text-black text-text font-bold">BOT BALANCE</span>
                    </div>
                <span className='text-ltitle font-extrabold'>238.87$</span>
                <span className='text-text font-medium mt-[5px] opacity-50'>This is the capital that's currently in the hands of Crypture Bot.</span>
            </div>
            <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                    <div className='flex flex-row mt-[8px]'>
                        <SparklesIcon className='w-[20px] h-[20px] text-black mr-[6px]'></SparklesIcon>
                        <span className="text-black text-text font-bold">BOT COIN</span>
                    </div>
                    <div className='flex flex-row'>
                        <span className='text-ltitle font-extrabold'>0.00344</span>
                        <span className='text-ltitle font-medium'>BTC</span>
                    </div>
                <span className='text-text font-medium mt-[5px] opacity-50'>This is the coin Crypture Bot is currently handling.</span>
            </div>
        </div>

        <div className="flex flex-row gap-[15px]">
            <div className='flex flex-row mt-[8px]'>
                <PlusIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></PlusIcon>
                <span className="text-purple-200 text-text font-medium">Add to Crypture Bot</span>
            </div>
            <div className='flex flex-row mt-[8px]'>
                <MinusIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></MinusIcon>
                <span className="text-purple-200 text-text font-medium">Transfer to Account Wallet</span>
            </div>
            dis
        </div>

        <div className="flex flex-col gap-[15px] w-full">
            <span className='text-header font-bold'>Transaction History</span>
            <div className="w-full overflow-hidden">
                <div className="flex flex-row bg-gray-100 w-full h-[50px] justify-evenly">
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-extrabold box-border pl-[15px]">Date</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-extrabold box-border pl-[15px]">From</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-extrabold box-border pl-[15px]">To</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-extrabold box-border pl-[15px]">Amount</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-extrabold box-border pl-[15px]">Rate</div>
                </div>
                <div className="flex flex-row bg-white w-full h-[50px] justify-evenly border-b-gray-200 border-b-[1.5px]">
                    <div className="flex w-[20%] h-[50px] items-center text-gray-600 text-text font-medium box-border pl-[15px]">Date</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">From</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">To</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">Amount</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">Rate</div>
                </div>
            </div>
         </div>
    </div>
    );
};

export default WalletInfo2;
