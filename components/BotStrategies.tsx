import { ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import axios from "axios";

interface BotStrategyProps {
  title: string;
  description: string;
  active?: boolean;
}

const BotStrategy = ({ title, description, active }: BotStrategyProps) => {
  return (
    <div className="flex flex-col p-4 ring-1 ring-slate-200 rounded-md h-64 space-y-2">
      <div className="flex flex-col justify-between h-full">

      <div>
        <h1 className="font-bold text-md">{title}</h1>
        <h2>{description}</h2>
      </div>
      <div>
        <p className="font-semibold space-x-2">
          <span>Status:</span>
          {active ? (
            <span className="text-green-600">Active</span>
          ) : (
            <span className="text-red-600">Inactive</span>
          )}
        </p>
        <p className="font-semibold">
          <span className="flex space-x-1">
            <span>Performance:</span>
            <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
            <span className="text-green-500">+12%</span>
          </span>
        </p>
      </div>
      </div>
      <button
        type="button"
        className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Activate
      </button>
    </div>
  );
};

const BotStrategies = async () => {
  const response = await axios.get("http://127.0.0.1:5000/get_balance?coin=ETH");
  const data = response.data;


  return (
    <div>
      <h1 className="text-3xl font-bold">Bot Strategies</h1>
      <div className="flex flex-row space-x-7 mt-10 justify-center w-full">
        <BotStrategy
          title="Strategy 1"
          description="Buy when price is low, sell when price is high"
          active
        />
        {data}
        <BotStrategy
          title="Strategy 2"
          description="Buy when price is low, sell when price is high"
        />
        <BotStrategy
          title="Strategy 3"
          description="Buy when price is low, sell when price is high"
        />
      </div>
    </div>
  );
};

export default BotStrategies;
