import Wallet from "@/components/Wallet";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <Sidebar>
      <div className="w-full">
        <Wallet />
      </div>
    </Sidebar>
  );
}
