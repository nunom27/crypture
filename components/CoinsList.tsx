import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const CoinsList = async () => {
  const response = await axios.get("https://api.uphold.com/v0/assets");
  const data = response.data;
  data.map((item: any, index: number) => {
    console.log(item);
  });

  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
      {data.map((item: any, index: number) => {
        // const tickerResponse = await axios.get(`https://api.uphold.com/v0/ticker/USD-EUR`);
        // const askValue = tickerResponse.data.ask;
        return (
          <div key={index} className="flex flex-col p-3 items-center">
            <button
              type="button"
              className="rounded-md bg-white px-4.5 py-4.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 box-border h-32 w-32 p-4 border-1 flex flex-col items-center justify-center"
            >
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <h2 className="mt-3 truncate max-w-full hover:overflow-visible hover:text-wrap hover:whitespace-normal">{item.name}</h2>
            </button>
          </div>

        );
      })}
    </div>
  );
};

export default CoinsList;
