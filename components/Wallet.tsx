"use client";
import { SetStateAction, useEffect, useRef, useState } from 'react';
import WalletInfo1 from './WalletInfo1';
import WalletInfo2 from './WalletInfo2';
import PopUp from './PopUp';

const ACCOUNT_WALLET = 'accountwallet';
const BOT_WALLET = 'botwallet';

function Wallet() {
  const [selectedWallet, setSelectedWallet] = useState('accountwallet');
  const [popUpOpened, setPopUpOpened] = useState(false)

  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
      <div className="text-mtitle leading-tight font-extrabold gap-[15px]">Wallet</div>
        <div className="flex flex-row gap-[10px]">
          <div 
              onClick={() => setSelectedWallet(ACCOUNT_WALLET)}
              style={{backgroundColor: selectedWallet === ACCOUNT_WALLET ? '#901BC7' : '#F3F4F6',
                      color: selectedWallet === ACCOUNT_WALLET ? '#FFFFFF' : '#000000'}}
              className='w-auto h-[50px] px-[16px] rounded-[25px] flex flex-col items-center justify-center text-text'
          >
              <span className='text-text font-bold'>Account Wallet</span>
          </div>
          <div 
            onClick={() => setSelectedWallet(BOT_WALLET)}
            style={{backgroundColor: selectedWallet === BOT_WALLET ? '#901BC7' : '#F3F4F6',
                    color: selectedWallet === BOT_WALLET ? '#FFFFFF' : '#000000'}}
            className='w-auto h-[50px] px-[16px] rounded-[25px] flex flex-col items-center justify-center text-text'
          >
            <span className='text-text font-bold'>Bot Wallet</span>
          </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
        {selectedWallet === ACCOUNT_WALLET && <WalletInfo1 />}
        {selectedWallet === BOT_WALLET && <WalletInfo2 />}
      </div>
      <button onClick={() => setPopUpOpened(true)}>Test</button>
      <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
        {popUpOpened === true && <PopUp popUpOpened={popUpOpened} setPopUpOpened={setPopUpOpened} />}
      </div>
    </div>
  );
}

export default Wallet;



