import React from "react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    name: "Meditation",
    image: "/assets/images/a1.jpg",
  },
  {
    name: "Breathing exercises",
    image: "/assets/images/a2.jpg",
  },
  {
    name: "Progressive muscle relaxation",
    image: "/assets/images/a3.jpg",
  },
  {
    name: "Body scan",
    image: "/assets/images/f1.jpg",
  },
  {
    name: "Guided imagery",
    image: "/assets/images/f1.jpg",
  },
  {
    name: "Mindfulness journaling",
    image: "/assets/images/f1.jpg",
  },
];

const Activity = () => {
  return (
    <div className=" p-8 mx-auto max-w-7xl px-4 ">
      <div className="mb-[2rem]">
        <h2 className="text-center mb-[16px] text-3xl font-extrabold text-gray-900 ">
          Stress relief activities
        </h2>
      </div>
      <div className="mt-20 flex flex-row gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="text-center">
            <img
              alt={activity.name}
              className="mx-auto h-32 w-32 rounded-full"
              height="128"
              src={activity.image}
              style={{
                aspectRatio: "128/128",
                objectFit: "cover",
              }}
              width="128"
            />
            <h3 className="mt-4 text-sm font-semibold text-gray-900">
              {activity.name}
            </h3>
          </div>
        ))}
      </div>
      <div className=" text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ready to start your mindfulness journey?
        </h2>
        <div className="mt-8">
          <Button className=" text-black px-8 py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-yellow-300">
            Take the Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
