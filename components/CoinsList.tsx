import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const CoinRates = async () => {
  const response = await axios.get("https://api.uphold.com/v0/assets");
  const data = response.data;
  data.map((item: any, index: number) => {
    console.log(item);
  });
  
  return (
    <div className="border divide-y max-w-max">
      {data.map((item: any, index: number) => {
      // const tickerResponse = await axios.get(`https://api.uphold.com/v0/ticker/USD-EUR`);
        // const askValue = tickerResponse.data.ask;
        return (
        <div key={index} className="flex flex-row p-2 items-center ">
          <Image src={item.image} alt={item.name} width={50} height={50} />
          <h1>{item.code}</h1>
          <h2>{item.name}</h2>
          <h3>{item.type}</h3>
        </div>
      
      );})}
      </div>
  );
};

export default CoinRates;
