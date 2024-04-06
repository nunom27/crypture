import CoinCharts from "@/components/CoinCharts";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <Sidebar>
      <div className="h-[500px] mx-16 flex flex-col">
        <CoinCharts />
      </div>
    </Sidebar>
  );
}
