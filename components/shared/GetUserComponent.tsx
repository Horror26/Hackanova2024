"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import useChatBotModal from "@/hooks/useChatBotModal";
import { getUserById } from "@/lib/actions/user.actions";

const GetCurrentUserComponent = () => {
  const chatBotModal = useChatBotModal();
  const [user, setUser] = useState({ gender: "male", career: "Education" });
  console.log(chatBotModal.type);
  useEffect(() => {
    const fetch = async () => {
      if (typeof window !== "undefined" && localStorage.getItem("userId")) {
        const data = await getUserById(localStorage.getItem("userId") || "{}");
        setUser(data);
      }
    };
    fetch();
  }, []);

  console.log(user);
  const [messages, setMessages] = useState([
    { person: "user", text: "Hello" },
    // { person: "user", text: "Im really sad" },
    // { person: "assistant", text: "Hello Small Bro" },
    // { person: "user", text: "Im really sad" },
    // { person: "assistant", text: "Hello Small Bro" },
    // { person: "user", text: "Im really sad" },
    // { person: "assistant", text: "Hello Small Bro" },
    // { person: "user", text: "Im really sad" },
    // { person: "assistant", text: "Hello Small Bro" },
    // { person: "user", text: "Im really sad" },
  ]);
  const [curr_msg, set_curr_msg] = useState("");
  const handleSubmit = (e: any) => {
    console.log(curr_msg);
    setMessages((prev) => {
      return [...prev, { person: "user", text: curr_msg }];
    });
    set_curr_msg("");
    sendOtherChat();
  };
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
    const personality = localStorage.getItem("values");
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
      `Provide me a reply, I am, ${curr_msg} make it sound like my ${chatBotModal.type} talking to me It should sound real and supportive towards good, answer in just one sentence only. My gender is ${user.gender} and have a ${personality} perrsonality`
    );
    // const result = await chat.sendMessage(
    //   `Provide me a reply, I am, ${curr_msg} make it sound like my ${chatBotModal.type} talking to me It should sound real and supportive towards good, answer in just one sentence only My work at ${user.career} and my gender is ${user.gender} and have a ${personality} perrsonality`
    // );
    const response = result.response;
    return response.text();
  }

  const sendOtherChat = async () => {
    const resp = await runChat();
    setMessages((prev) => {
      return [...prev, { person: "assistant", text: resp }];
    });
  };

  // runChat();
  return (
    <section className="chatbot-page-wrapper">
      <div className="message-history-wrapper">
        <div className="messages">
          {messages.map((message, idx) => {
            return (
              <div
                key={idx}
                className={
                  message.person === "user" ? "my-message" : "other-message"
                }
              >
                {message.text}
              </div>
            );
          })}
        </div>
        <div className="person-image">
          {chatBotModal.type === "grandfather" && (
            <img src="/assets/images/grandfatherslide.png" />
          )}
          {chatBotModal.type === "grandmother" && (
            <img src="/assets/images/grandmother.png" />
          )}
          {/* {chatBotModal.type === "mother" && (
            <img src="/assets/images/motherslide.png" />
          )}*/}
          {chatBotModal.type === "father" && (
            <img src="/assets/images/fatherslide.jpg" />
          )}
        </div>
      </div>
      <div className="reply">
        <input
          type="text"
          value={curr_msg}
          onChange={(e) => set_curr_msg(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </section>
  );
};

export default GetCurrentUserComponent;
