import Bot from "@/components/Bot";
import Activity from "@/components/home/Activity";
import Features from "@/components/home/Features";
import Herosection from "@/components/home/Herosection";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 p-4">
        <Herosection />
        <Features />
        <Activity />
      </div>
      <Bot />
    </>
  );
}
