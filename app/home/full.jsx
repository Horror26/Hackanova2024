import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const full = () => {
    return (
        <div className="bg-white text-gray-900">
          <div className="bg-[#457b9d] p-8 text-center text-white">
            <h1 className="text-4xl font-bold">Start your mindfulness journey today</h1>
            <p className="mt-4">
              Take our mental health quiz and get personalized stress relief activities, AI chatbot counseling, and more.
            </p>
            <Button className="mt-6 bg-[#1d3557] text-white">Take the Quiz</Button>
          </div>
          <div className="py-12 px-8">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="mt-4">
              MindfulMe is more than just a meditation app. We offer a variety of features to help you manage stress and
              improve your mental wellbeing.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="flex items-center space-x-4">
                <img
                  alt="AI chatbot counseling"
                  className="h-20 w-20 flex-none rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <div>
                  <h3 className="text-lg font-bold">AI chatbot counseling</h3>
                  <p>Talk to an AI counselor trained in cognitive behavioral therapy</p>
                </div>
              </Card>
              <Card className="flex items-center space-x-4">
                <img
                  alt="Personalized stress relief activities"
                  className="h-20 w-20 flex-none rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <div>
                  <h3 className="text-lg font-bold">Personalized stress relief activities</h3>
                  <p>Get a list of personalized stress relief activities based on your mental health quiz results</p>
                </div>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 py-12 px-8">
            <h2 className="text-3xl font-bold">Stress relief activities</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  alt="Meditation"
                  className="mx-auto h-20 w-20 rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <h3 className="mt-2 font-bold">Meditation</h3>
              </div>
              <div className="text-center">
                <img
                  alt="Breathing exercises"
                  className="mx-auto h-20 w-20 rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <h3 className="mt-2 font-bold">Breathing exercises</h3>
              </div>
              <div className="text-center">
                <img
                  alt="Progressive muscle relaxation"
                  className="mx-auto h-20 w-20 rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <h3 className="mt-2 font-bold">Progressive muscle relaxation</h3>
              </div>
              <div className="text-center">
                <img
                  alt="Body scan"
                  className="mx-auto h-20 w-20 rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <h3 className="mt-2 font-bold">Body scan</h3>
              </div>
              <div className="text-center">
                <img
                  alt="Guided imagery"
                  className="mx-auto h-20 w-20 rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <h3 className="mt-2 font-bold">Guided imagery</h3>
              </div>
              <div className="text-center">
                <img
                  alt="Mindfulness journaling"
                  className="mx-auto h-20 w-20 rounded-full bg-gray-200"
                  height="80"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <h3 className="mt-2 font-bold">Mindfulness journaling</h3>
              </div>
            </div>
          </div>
          <div className="py-12 px-8 text-center">
            <h2 className="text-3xl font-bold">Ready to start your mindfulness journey?</h2>
            <Button className="mt-6 bg-[#1d3557] text-white">Take the Quiz</Button>
          </div>
        </div>
      )
}

export default full;






