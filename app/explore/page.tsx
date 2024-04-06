import CoinCharts from "@/components/CoinCharts";
import CoinsList from "@/components/CoinsList";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <Sidebar>
      <div>
        <CoinsList />
      </div>
    </Sidebar>
  );
}
