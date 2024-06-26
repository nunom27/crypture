"use client";
// TradingViewWidget.jsx
import { SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Bot() {
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [selectedRisk, setSelectedRisk] = useState(-1);
  const [selectedCapital, setSelectedCapital] = useState("");
  const [balanceFiat, setBalanceFiat] = useState<number>(0.0);
  const [balanceCrypto, setBalanceCrypto] = useState<number>(0.0);
  const [bot, setBot] = useState<{ [key: string]: number | string }>({});
  const [botStatusVar, setBotStatusVar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const responseBalanceFiat = await axios.get(
        "http://127.0.0.1:5000/get_balance?owner=bot&coin=USD"
      );
      setBalanceFiat(responseBalanceFiat.data);
      const responseBalanceCrypto = await axios.get(
        "http://127.0.0.1:5000/get_balance?owner=bot&coin=BTC"
      );
      setBalanceCrypto(responseBalanceCrypto.data);
      const responseBot = await axios.get("http://127.0.0.1:5000/get_bot");
      setBot(responseBot.data);
      setBotStatusVar(responseBot.data["status"]);
    };
    fetchData();
    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, [botStatusVar]);

  const updateBot = async (event: any) => {
    // event.preventDefault(); // Prevent the form from refreshing the page
    try {
      const response2 = await axios.post(
        "http://127.0.0.1:5000/transfer_money_to_bot",
        {
          amount: selectedCapital,
          coin: bot["coin"]
          // Add other data to send in the request body
        }
      );

      try {
        const response = await axios.post("http://127.0.0.1:5000/update_bot", {
          coin: selectedCrypto,
          risk: selectedRisk,
          status: "active",
          // Add other data to send in the request body
        });
        setBotStatusVar("active");
        console.log("Data posted:", response.data);
        // Handle the response if needed
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const setBotStatus = async (status: string) => {
    console.log("Setting bot status to:", status);
    try {
      const response = await axios.post("http://127.0.0.1:5000/update_bot", {
        status: status,
      });
      setBotStatusVar(status);
      console.log("Data posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const stopInvestment = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/update_bot", {
        status: "inactive"
      });
      setBotStatusVar("inactive");
      try {
        const response2 = await axios.post("http://127.0.0.1:5000/transfer_money_from_bot", {
          amount: balanceFiat
        });
        try {
          const response3 = await axios.post("http://127.0.0.1:5000/transfer_money_from_bot", {
            amount: balanceCrypto
          });
        } catch (error) {
          console.error("Error posting data:", error);
        }
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }
  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
      <div className="text-mtitle leading-tight font-extrabold">
        Crypture Bot
      </div>
      <div className="flex flex-row w-full gap-[10px]">
        <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
          <div className="flex flex-row mt-[8px]">
            <SparklesIcon className="w-[20px] h-[20px] text-black mr-[6px]"></SparklesIcon>
            <span className="text-black text-text font-bold">BOT BALANCE</span>
          </div>
          <span className="text-ltitle font-extrabold">{balanceFiat}$</span>
          <span className="text-text font-medium mt-[5px] opacity-50">
            This is the capital that's currently in the hands of Crypture Bot.
          </span>
        </div>
        <div className="flex flex-col gap-[5px] w-[50%] h-auto rounded-[15px] bg-gray-100 p-[20px] text-black">
          <div className="flex flex-row mt-[8px]">
            <SparklesIcon className="w-[20px] h-[20px] text-black mr-[6px]"></SparklesIcon>
            <span className="text-black text-text font-bold">BOT COIN</span>
          </div>
          <div className="flex flex-row">
            <span className="text-ltitle font-extrabold">{balanceCrypto}</span>
            <span className="text-ltitle font-medium">{bot["coin"]}</span>
          </div>
          <span className="text-text font-medium mt-[5px] opacity-50">
            This is the coin Crypture Bot is currently handling.
          </span>
        </div>
      </div>
      <div className="flex flex-row mt-[8px]">
        <ArrowRightIcon className="w-[20px] h-[20px] text-purple-200 mr-[6px]"></ArrowRightIcon>
        <span className="text-purple-200 text-text font-medium">
          Go to Wallet
        </span>
      </div>
      <div className="w-full flex flex-col justify-left gap-[2px]">
        <div className="bg-black w-full h-[1.5px] opacity-10 my-[10px]"></div>
        <div className="text-text font-extrabold opacity-50">
          NEW INVESTMENT
        </div>
        <div className="text-text font-medium opacity-50">
          Create a new investment with Crypture Bot. If you have a current
          investment, your Bot Wallet balance will be transferred back to your
          Account Wallet balance.
        </div>
      </div>
      <form
        className="w-full flex flex-col gap-[15px] items-start"
        onSubmit={(event) => updateBot(event)}
      >
        <span className="text-header font-extrabold">
          Choose a cryptocurrency
        </span>
        <div className="flex flex-wrap w-full gap-[10px]">
          <div
            onClick={() => setSelectedCrypto("BTC")}
            style={{
              backgroundColor: selectedCrypto === "BTC" ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedCrypto === "BTC"
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center"
          >
            <span className="text-text font-bold">BTC</span>
            <span>Bitcoin</span>
          </div>
          <div
            onClick={() => setSelectedCrypto("ETH")}
            style={{
              backgroundColor: selectedCrypto === "ETH" ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedCrypto === "ETH"
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center"
          >
            <span className="text-text font-bold">ETH</span>
            <span>Ethereum</span>
          </div>
          <div
            onClick={() => setSelectedCrypto("SOL")}
            style={{
              backgroundColor: selectedCrypto === "SOL" ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedCrypto === "SOL"
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center"
          >
            <span className="text-text font-bold">SOL</span>
            <span>Solana</span>
          </div>
          <div
            onClick={() => setSelectedCrypto("DOGE")}
            style={{
              backgroundColor:
                selectedCrypto === "DOGE" ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedCrypto === "DOGE"
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[150px] h-[100px] rounded-[15px] flex flex-col items-center justify-center"
          >
            <span className="text-text font-bold">DOGE</span>
            <span>Dogecoin</span>
          </div>
        </div>
        <span className="text-header font-extrabold mt-[10px]">
          Choose a risk
        </span>
        <div className="flex flex-wrap w-full gap-[10px]">
          <div
            onClick={() => setSelectedRisk(0)}
            style={{
              backgroundColor: selectedRisk === 0 ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedRisk === 0
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start"
          >
            <span className="text-text font-bold">Low risk</span>
            <span>Description</span>
            {/* <span className="mt-[15px]">
              <span className="text-text font-bold">Performance: </span>
              percentage
            </span> */}
          </div>
          <div
            onClick={() => setSelectedRisk(1)}
            style={{
              backgroundColor: selectedRisk === 1 ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedRisk === 1
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start"
          >
            <span className="text-text font-bold">Average risk</span>
            <span>Description</span>
            {/* <span className="mt-[15px]">
              <span className="text-text font-bold">Performance: </span>
              percentage
            </span> */}
          </div>
          <div
            onClick={() => setSelectedRisk(2)}
            style={{
              backgroundColor: selectedRisk === 2 ? "#F2E4F8" : "#F3F4F6",
              border:
                selectedRisk === 2
                  ? "1.5px solid #901BC7"
                  : "1.5px solid rgba(0,0,0,0)",
            }}
            className="w-[32%] h-auto rounded-[15px] p-[15px] box-border flex flex-col items-left justify-start"
          >
            <span className="text-text font-bold">High risk</span>
            <span>Description</span>
            {/* <span className="mt-[15px]">
              <span className="text-text font-bold">Performance: </span>
              percentage
            </span> */}
          </div>
        </div>
        <span className="text-header font-extrabold mt-[10px]">
          How much would you like to commit to Crypture Bot?
        </span>
        <div className="flex flex-row justify-start items-start">
          <span className="text-ltitle">$</span>
          <input
            type="number"
            value={selectedCapital}
            onChange={(e) => setSelectedCapital(e.target.value)}
            min="0"
            max="10000"
            className="outline-none border-b-[1.5px] w-[300px] text-ltitle"
          ></input>
        </div>
        <span className="text-text font-medium mt-[5px] opacity-50">
          Your capital is at risk. You're commiting this money to be managed by
          Crypture bot. You can take it out at any time.
        </span>
        <button
          type="submit"
          className="w-[200px] px-[16px] py-[10px] bg-purple-200 rounded-[10px] text-white text-text mt-[20px]"
        >
          Done
        </button>
      </form>
      {botStatusVar == "active" ? (
        <div className="w-full flex flex-col gap-[2px]">
          <div className="bg-black w-full h-[1.5px] opacity-10 my-[10px]"></div>
          <div className="text-text font-extrabold opacity-50">
            PAUSE THIS INVESTMENT
          </div>
          <div className="text-text font-medium opacity-50">
            Stops all Crypture Bot actions while keeping the cyrptocurrency in
            the Bot Wallet.
          </div>
          <button onClick={() => setBotStatus("inactive")} className="w-[200px] px-[16px] py-[10px] bg-gray-500 rounded-[10px] text-white text-text mt-[20px]">
            Pause now
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-[2px]">
          <div className="bg-black w-full h-[1.5px] opacity-10 my-[10px]"></div>
          <div className="text-text font-extrabold opacity-50">
            RESUME THIS INVESTMENT
          </div>
          <div className="text-text font-medium opacity-50">
            Resumes Crypture Bot actions with the cyrptocurrency currently
            stored the Bot Wallet.
          </div>
          <button
            onClick={() => setBotStatus("active")}
            className="w-[200px] px-[16px] py-[10px] bg-gray-500 rounded-[10px] text-white text-text mt-[20px]"
          >
            Resume now
          </button>
        </div>
      )}
      <div className="w-full flex flex-col gap-[2px]">
        <div className="bg-black w-full h-[1.5px] opacity-10 my-[10px]"></div>
        <div className="text-text font-extrabold opacity-50">
          STOP THIS INVESTMENT
        </div>
        <div className="text-text font-medium opacity-50">
          Transfers your bot balance back to your account balance as soon as you
          delete your investment with Crypture Bot. You can start a new one at
          any time.
        </div>
        <button  className="w-[200px] px-[16px] py-[10px] bg-red-300 rounded-[10px] text-white text-text mt-[20px]">
          Stop now
        </button>
      </div>
    </div>
  );
}

export default Bot;
