"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Bot() {

    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [selectedRisk, setSelectedRisk] = useState(-1);
    const [selectedCapital, setSelectedCapital] = useState('');

    const updateBot = async (event: any) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await axios.post("http://127.0.0.1:5000/update_bot", {
                coin: selectedCrypto,
                risk: selectedRisk,
                status: 'active'
                // Add other data to send in the request body
            });
            console.log('Data posted:', response.data);
            // Handle the response if needed
        } catch (error) {
            console.error('Error posting data:', error);
        }
    }


    return (
        <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
            <div className="text-mtitle leading-tight font-extrabold">Crypture Bot</div>
            <form className='w-full flex flex-col gap-[15px] items-start' onSubmit={(event) => updateBot(event)}>
                <span className='text-header font-extrabold'>Choose a cryptocurrency</span>
                <div className="flex flex-wrap w-full gap-[10px]">
                    <div 
                    onClick={() => setSelectedCrypto('BTC')}
                    style={{backgroundColor: selectedCrypto === 'BTC' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'BTC' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>BTC</span>
                        <span>Bitcoin</span>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('ETH')}
                    style={{backgroundColor: selectedCrypto === 'ETH' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'ETH' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>ETH</span>
                        <span>Ethereum</span>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('SOL')}
                    style={{backgroundColor: selectedCrypto === 'SOL' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'SOL' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>SOL</span>
                        <span>Solana</span>
                    </div>
                    <div 
                    onClick={() => setSelectedCrypto('DOGE')}
                    style={{backgroundColor: selectedCrypto === 'DOGE' ? '#F2E4F8' : '#F3F4F6',
                            border: selectedCrypto === 'DOGE' ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center'
                    >
                        <span className='text-text font-bold'>DOGE</span>
                        <span>Dogecoin</span>
                    </div>
                </div>
                <span className='text-header font-extrabold mt-[10px]'>Choose a risk</span>
                <div className="flex flex-wrap w-full gap-[10px]">
                    <div 
                    onClick={() => setSelectedRisk(0)}
                    style={{backgroundColor: selectedRisk === 0 ? '#F2E4F8' : '#F3F4F6',
                            border: selectedRisk === 0 ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start'
                    >
                        <span className='text-text font-bold'>Low risk</span>
                        <span>Description</span>
                        <span className='mt-[15px]'><span className='text-text font-bold'>Performance: </span>percentage</span>
                    </div>
                    <div 
                    onClick={() => setSelectedRisk(1)}
                    style={{backgroundColor: selectedRisk === 1 ? '#F2E4F8' : '#F3F4F6',
                            border: selectedRisk === 1 ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
                    className='w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start'
                    >
                        <span className='text-text font-bold'>Average risk</span>
                        <span>Description</span>
                        <span className='mt-[15px]'><span className='text-text font-bold'>Performance: </span>percentage</span>
                    </div>
                    <div 
                    onClick={() => setSelectedRisk(2)}
                    style={{backgroundColor: selectedRisk === 2 ? '#F2E4F8' : '#F3F4F6',
                            border: selectedRisk === 2 ? '1.5px solid #901BC7' : '1.5px solid rgba(0,0,0,0)'}}
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
                    className='px-[16px] py-[10px] bg-purple-200 rounded-[10px] text-white text-text mt-[20px]'
                >Done</button>
            </form>
        </div>
    );
}

export default Bot;
