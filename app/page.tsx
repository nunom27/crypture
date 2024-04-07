import CoinCharts from "@/components/CoinCharts";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <Sidebar>
      <div className="text-mtitle leading-tight font-extrabold"><span className="bg-gradient-to-r from-purple-200 to-gold inline-block text-transparent bg-clip-text">Good morning,</span> <br></br> Code Sailors</div>
      <div className="h-[500px]">
        <CoinCharts />

      </div>
    </Sidebar>
  );
}
