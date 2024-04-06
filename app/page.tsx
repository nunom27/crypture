import CoinCharts from "@/components/CoinCharts";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <Sidebar>
      <CoinCharts />
    </Sidebar>
  );
}
