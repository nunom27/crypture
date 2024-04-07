"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CurrencyDollarIcon, CircleStackIcon } from '@heroicons/react/24/solid'
import PopUp1 from './PopUp1';
import PopUp2 from './PopUp2';
import {
    PlusIcon,
    MinusIcon
  } from '@heroicons/react/24/outline'

function WalletInfo1() {
    const [popUpOpened1, setPopUpOpened1] = useState(false)
    const [popUpOpened2, setPopUpOpened2] = useState(false)

  return(
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
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
        <div className="flex flex-row gap-[20px]">
            <div className='flex flex-row mt-[8px]'>
                <button className="text-purple-200 text-text font-medium w-auto flex justify-center items-center" onClick={() => setPopUpOpened1(true)}>
                    <PlusIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></PlusIcon>
                    <p className="w-50">Buy crypto</p>
                </button>
                <div className="none">
                    {popUpOpened1 === true && <PopUp1 popUpOpened1={popUpOpened1} setPopUpOpened1={setPopUpOpened1} />} 
                </div>
            </div>
            <div className='flex flex-row mt-[8px]'>
                <button className="text-purple-200 text-text font-medium w-auto flex justify-center items-center" onClick={() => setPopUpOpened2(true)}>
                    <MinusIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></MinusIcon>
                    <p className="w-50">Sell crypto</p>
                </button>
                <div className="none">
                    {popUpOpened2 === true && <PopUp2 popUpOpened2={popUpOpened2} setPopUpOpened2={setPopUpOpened2} />} 
                </div>
            </div>
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

export default WalletInfo1;
