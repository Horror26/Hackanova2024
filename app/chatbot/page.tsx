"use client";

import React, { useState } from "react";

const page = () => {
  const [prompt, setPrompt] = useState("I am sad");
  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  let values: any = "positive";
  if (typeof window !== "undefined") {
    values = localStorage.getItem("values");
  }
  console.log(values);
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyAu9Os4eR-pnlw1JbRE_DpccFoHeYI9ghk";

  async function runChat() {
    const person = "dad";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chat.sendMessage(
      `Provide me a reply, I am, ${prompt} make it sound like my ${person} talking to me It should sound real and supportive towards good, answer in just one sentence only`
    );
    const response = result.response;
    console.log(response.text());
  }

  runChat();
  return <div></div>;
};

export default page;
