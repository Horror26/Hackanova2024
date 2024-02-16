import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const Herosection = () => {
  return (
    <div className=" py-12">
      <div className="w-[70%] mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          {/* Hero Image Section */}
          <div className="relative">
            <Image
              alt="Mindfulness Illustration"
              className="w-full"
              height={800}
              src="/assets/images/first.jpg"
              layout="responsive"
              objectFit="cover"
              width={800}
            />
            {/* Hero Text Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-8">
              <h1 className="text-5xl font-bold text-center text-blue-900">
                Start your mindfulness journey today
              </h1>
              <p className="mt-4 text-lg text-center">
                Take our mental health quiz and get personalized stress relief activities, AI chatbot counseling, and more.
              </p>
              <Button className="mt-8" variant="default">
                Take the Quiz
              </Button>
            </div>
          </div>
          
          {/* Features Section */}
          {/* <div className="p-8">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="mt-4 text-lg">
              MindfulMe is more than just a meditation app. We offer a variety of features to help you manage stress and improve your mental wellbeing.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
