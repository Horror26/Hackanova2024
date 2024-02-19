"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./styles/herosection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Herosection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        data-aos="flip-left"
        className="relative overflow-hidden rounded-lg bg-blue-300 p-8 text-white"
      >
        <img
          alt=""
          className="hero-image-wrapper"
          src="/assets/images/first.jpg"
        />

        <div className="text-wrapper-hero sm:bottom-8 lg:bottom-16 md:left-8 lg:left-16">
          <h2
            data-aos="fade-right"
            className="text-xl sm:text-3xl lg:text-3xl font-bold"
          >
            Start your mindfulness journey today
          </h2>
          <p
            data-aos="fade-right"
            className=" descrption-wrapper text-sm sm:text-base lg:text-lg mt-2"
          >
            Take our mental health quiz and get personalized stress relief
            activities, AI chatbot counseling, and more.
          </p>
          <Button className="her-button hover:bg-yellow-300 text-black mt-4">
            Take the Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
