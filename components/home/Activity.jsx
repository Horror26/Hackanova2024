"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    name: "Meditation",
    image: "/assets/images/a1.jpg",
    personality: "Positive",
  },
  {
    name: "Breathing",
    image: "/assets/images/a2.jpg",
    personality: "Depressed",
  },
  {
    name: "Nature Walk",
    image: "/assets/images/NatureWalk.jpg",
    personality: "Empathetic",
  },
  {
    name: "Creative Expression",
    image: "/assets/images/CreativeExpression.jpg",
    personality: "Empathetic",
  },
  {
    name: "Volunteering",
    image: "/assets/images/Volunteering.jpg",
    personality: "Empathetic",
  },
  {
    name: "Socializing",
    image: "/assets/images/Socializing.jpg",
    personality: "Depressed",
  },
  {
    name: "Cognitive Behavioral Therapy",
    image: "/assets/images/CognitiveBehavioralTherapy.jpg",
    personality: "Depressed",
  },
  {
    name: "Physical Exercise",
    image: "/assets/images/PhysicalExercise.jpg",
    personality: "Positive",
  },
  {
    name: "Yoga",
    image: "/assets/images/Yoga.jpg",
    personality: "Professional",
  },
  {
    name: "Setting Goals",
    image: "/assets/images/SettingGoals.jpg",
    personality: "Positive",
  },
  {
    name: "Healthy Eating",
    image: "/assets/images/HealthyEating.jpg",
    personality: "Professional",
  },
  {
    name: "Limited Screen Time",
    image: "/assets/images/LimitedScreenTime.jpg",
    personality: "Professional",
  },
];

const Activity = () => {
  const [filter, setFilter] = useState("Positive");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("values")) {
      const value = localStorage.getItem("values");
      setFilter(value);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Stress relief activities
      </h2>

      <div className="mt-8 flex flex-col sm:flex-row gap-14 w-full items-center justify-center align-baseline">
        {activities.map((activity, index) =>
          activity.personality === filter ? (
            <div data-aos="zoom-in"
              key={index}
              className="text-center flex-row sm:flex-col flex-wrap"
            >
              <img
                alt={activity.name}
                className="mx-auto h-32 w-32 rounded-full border border-black"
                height="auto"
                src={activity.image}
                style={{ aspectRatio: "128/128", objectFit: "cover" }}
                width="100%"
              />
              <h3 className="mt-4 text-sm font-semibold text-gray-900 w-32 h-auto absolute">
                {activity.name}
              </h3>
            </div>
          ) : null
        )}
      </div>

      <div className="text-center mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ready to start your mindfulness journey?
        </h2>
        <div className="mt-8">
          <Button className="text-black px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-yellow-300 w-8/4 hover:bg-blue-400">
            Take the Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
