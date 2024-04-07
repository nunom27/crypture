import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Bot from "@/components/Bot"

export default function Home() {
  return (
    <Sidebar>
      <div className="w-full">
        <Bot>

        </Bot>
      </div>
    </Sidebar>
  );
}