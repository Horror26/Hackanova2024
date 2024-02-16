import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const FeatureCard = ({ title, description }) => (
  <Card className="flex items-center space-x-4">
    <img
      alt={title}
      className="h-20 w-20 flex-none rounded-full bg-gray-200"
      height="80"
      src="/assets/images/f1.jpg"
      style={{
        aspectRatio: '80/80',
        objectFit: 'cover',
      }}
      width="80"
    />
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  </Card>
);

const ActivityCard = ({ title }) => (
  <div className="text-center">
    <img
      alt={title}
      className="mx-auto h-20 w-20 rounded-full bg-gray-200"
      height="80"
      src="/assets/images/f1.jpg"
      style={{
        aspectRatio: '80/80',
        objectFit: 'cover',
      }}
      width="80"
    />
    <h3 className="mt-2 font-bold">{title}</h3>
  </div>
);

const Home = () => {
  const features = [
    { title: 'AI chatbot counseling', description: 'Talk to an AI counselor trained in cognitive behavioral therapy' },
    { title: 'Personalized stress relief activities', description: 'Get a list of personalized stress relief activities based on your mental health quiz results' },
  ];

  const activities = ['Meditation', 'Breathing exercises', 'Progressive muscle relaxation', 'Body scan', 'Guided imagery', 'Mindfulness journaling'];

  return (
    <div className="bg-white text-gray-900">
       <div className="relative">
            <Image
              alt="Mindfulness Illustration"
              className="w-full"
              height={400}
              src="/assets/images/first.jpg"
              layout="responsive"
              objectFit="cover"
              width={400}
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
      <div className="py-12 px-8">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="mt-4">
          MindfulMe is more than just a meditation app. We offer a variety of features to help you manage stress and improve your mental wellbeing.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      {/* ... (existing code) */}
      <div className="bg-gray-100 py-12 px-8">
        <h2 className="text-3xl font-bold">Stress relief activities</h2>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <ActivityCard key={index} title={activity} />
          ))}
        </div>
      </div>
      <div className="py-12 px-8 text-center">
        <h2 className="text-3xl font-bold">Ready to start your mindfulness journey?</h2>
        <Button className="mt-6 bg-[#1d3557] text-white">Take the Quiz</Button>
      </div>
    </div>
  );
};

export default Home;
