'use client';
import Bot from "@/components/Bot";
import Activity from "@/components/home/Activity";
import Features from "@/components/home/Features";
import Herosection from "@/components/home/Herosection";
import React, {useEffect} from 'react';
import userhelperlibrary from "userhelperlibrary";
import { useRouter } from "next/navigation";
import TimeoutDIV from "@/components/TimeoutDIV"

export default function Home() {
  const route = useRouter()
  useEffect(() => {

    userhelperlibrary({destroy: false, lang: 'en'});
  }, []);
  setTimeout( () => route.push("./set-timeout"), 120000)
  return (
    <>
      <div className="bg-gray-100 p-4">
        <Herosection />
        <Features />
        <Activity />
      </div>
      <Bot />
      {/* <TimeoutDIV /> */}
    </>
  );
}
