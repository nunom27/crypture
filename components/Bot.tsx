"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';

function Bot() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const select = (option: string | SetStateAction<null>) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
        <div className="text-mtitle leading-tight font-extrabold">Crypture Bot</div>
        <form>
          <span className='text-header font-extrabold'>Choose a cryptocurrency</span>
          <div className="flex">
            <div
              id="option1"
              className={`border p-4 m-2 cursor-pointer ${selectedOption === 'option1' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => select('option1')}
            >
              Option 1
            </div>
            <div
              id="option2"
              className={`border p-4 m-2 cursor-pointer ${selectedOption === 'option2' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => select('option2')}
            >
              Option 2
            </div>
          </div>
        </form>
      </div>
    );
  }

export default Bot;
