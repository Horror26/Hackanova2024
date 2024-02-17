import React from "react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    name: "Meditation",
    image: "/assets/images/a1.jpg",
  },
  {
    name: "Breathing",
    image: "/assets/images/a2.jpg",
  },
  {
    name: "Body scan",
    image: "/assets/images/bodyscan.jpg",
  },
  {
    name: "Guided imagery",
    image: "/assets/images/guided.jpg",
  },
];

const Activity = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Stress relief activities
      </h2>

      <div className="mt-8 flex flex-col sm:flex-row gap-14 w-full items-center justify-center align-baseline">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="text-center flex-row sm:flex-col flex-wrap"
          >
            <img
              alt={activity.name}
              className="mx-auto h-32 w-32 rounded-full"
              height="auto"
              src={activity.image}
              style={{ aspectRatio: "128/128", objectFit: "cover" }}
              width="100%"
            />
            <h3 className="mt-4 text-sm font-semibold text-gray-900 w-32 h-auto">
              {activity.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
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
