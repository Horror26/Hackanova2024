'use client';
import Bot from "@/components/Bot";
import Activity from "@/components/home/Activity";
import Features from "@/components/home/Features";
import Herosection from "@/components/home/Herosection";
import React, {useEffect} from 'react';
import userhelperlibrary from "userhelperlibrary";

export default function Home() {
  useEffect(() => {
    userhelperlibrary();
  }, []);
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
