"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CurrencyDollarIcon, CircleStackIcon } from '@heroicons/react/24/solid'
import axios from "axios";

import {
    PlusIcon,
    MinusIcon
  } from '@heroicons/react/24/outline'

function WalletInfo1() {
    const [transactions, setTransactions] = useState([]);
    const [balances, setBalances] = useState<{ [key: string]: number }>({});
    
    useEffect(() => {
        const fetchData = async () => {
            const responseTrans = await axios.get("http://127.0.0.1:5000/get_transactions");
            setTransactions(responseTrans.data);
            const responseBalances = await axios.get("http://127.0.0.1:5000/get_balances");
            setBalances(responseBalances.data);
            console.log(responseBalances.data);
        }
        fetchData();
    }, []);
  return(
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
        <div className='flex flex-row w-full gap-[10px]'>
            <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                    <div className='flex flex-row mt-[8px]'>
                        <CurrencyDollarIcon className='w-[20px] h-[20px] text-black mr-[6px]'></CurrencyDollarIcon>
                        <span className="text-black text-text font-bold">ACCOUNT BALANCE</span>
                    </div>
                <span className='text-ltitle font-extrabold'>{balances["USD"]}$</span>
                <span className='text-text font-medium mt-[5px] opacity-50'>This is the value in USD of your fiat wallet.</span>
            </div>
            <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
                <div className='flex flex-row mt-[8px]'>
                    <CircleStackIcon className='w-[20px] h-[20px] text-black mr-[6px]'></CircleStackIcon>
                    <span className="text-black text-text font-bold">ACCOUNT ASSETS</span>
                </div>
                {Object.keys(balances).map((key) => (
                    (key !== 'USD') &&
                    <div key={key} className='flex flex-row justify-start items-center mt-[10px] space'>
                    {/* <div className='bg-black size-[50px] rounded-[50%] mr-[15px]'></div> */}
                    <div className="space-x-1">
                        <span className='font-bold text-headline'>{balances[key]}</span>
                        <span className='font-medium text-headline'>{key}</span>
                        {/* <br></br> */}
                        {/* <span className='font-medium text-text opacity-50'>coin name</span> */}
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="flex flex-row gap-[15px]">
            <div className='flex flex-row mt-[8px]'>
                <PlusIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></PlusIcon>
                <span className="text-purple-200 text-text font-medium">Buy crypto</span>
            </div>
            <div className='flex flex-row mt-[8px]'>
                <MinusIcon className='w-[20px] h-[20px] text-purple-200 mr-[6px]'></MinusIcon>
                <span className="text-purple-200 text-text font-medium">Sell crypto</span>
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
                {transactions && transactions.map((transaction: any, index: any) => (
                <div key={index} className="flex flex-row bg-white w-full h-[50px] justify-evenly border-b-gray-200 border-b-[1.5px]">
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">{new Date(transaction.date * 1000).toLocaleString()}</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">{transaction.from}</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">{transaction.to}</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">{transaction.amount} {transaction.from}</div>
                    <div className="flex w-[20%] h-[50px] items-center text-black text-text font-medium box-border pl-[15px]">{transaction.rate}$</div>
                </div>
            ))}
            </div>
         </div>
    </div>
    );
};

export default WalletInfo1;
