import CoinCharts from "@/components/CoinCharts";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <Sidebar>
      <div className="text-xltitle leading-tight"><span className="bg-gradient-to-r from-purple-200 to-gold inline-block text-transparent bg-clip-text font-bold">Good morning,</span> <br></br> Heitor</div>
      <div className="h-[500px]">
        <CoinCharts />

      </div>
    </Sidebar>
  );
}
