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
    <div className="flex flex-col justify-start items-start w-screen h-auto gap-10">
      <form className="flex justify-start items-start w-full max-w-lg">   
          <label className="sr-only">Search</label>
          <div className="flex justify-start w-full">
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
          </div>
          <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>Search
          </button>
      </form>
      <div className="flex flex-wrap w-[calc(100% - 32px)]">
        {data.map((item: any, index: number) => {
          return (
            <div key={index}>
              <button
                type="button"
                className="flex items-center gap-[20px] w-[100%] min-w-[300px] h-auto rounded-[15px] bg-gray-100 text-text text-black hover:bg-gray-200 box-border p-[16px] border-none"
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
