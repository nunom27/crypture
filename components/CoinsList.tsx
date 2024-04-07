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
    <div className="flex flex-col justify-start items-start gap-10 w-full max-w-[1600px] mx-auto">
      <div className="text-mtitle leading-tight font-extrabold">Explore</div>
      <div className="flex flex-wrap gap-[5px]">
        {data.map((item: any, index: number) => {
          return (
            <div className="w-[32%]" key={index}>
              <button
                type="button"
                className="flex text-left items-center gap-[20px] w-full h-auto rounded-[15px] bg-gray-100 text-text text-black hover:bg-gray-200 box-border p-[16px] border-none"
              >
                <Image src={item.image} alt={item.name} width={50} height={50} />
                <h2 className="text-text font-medium max-w-full hover:overflow-visible hover:text-wrap hover:whitespace-normal">{item.name}</h2>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoinsList;
