import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./styles/herosection.css";

const Herosection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg bg-blue-300 p-8 text-white">
        <img
          alt=""
          className="hero-image-wrapper"
          src="/assets/images/first.jpg"
        />
        <div className="text-wrapper-hero">
          <h2 className="">Start your mindfulness journey today</h2>
          <p className="mt-4 max-w-lg text-lg">
            Take our mental health quiz and get personalized stress relief
            activities, AI chatbot counseling, and more.
          </p>
          <Button className="her-button hover:bg-yellow-300 text-black">Take the Quiz</Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
