"use client";

import useChatBotModal from "@/hooks/useChatBotModal";
import Image from "next/image";
import React from "react";
import "@/components/shared/index.css";
import { useRouter } from "next/navigation";

const Bot = () => {
  const chatBotModal = useChatBotModal();
  const router = useRouter();

  return (
    <div>
      <div id="container-floating">
        <div
          onClick={() => {
            chatBotModal.change("grandfather"), router.push("/chatbot");
          }}
          className="nd5 nds flex justify-center items-center"
        >
          <Image
            className="rounded-full"
            height="35"
            width="35"
            alt="Avatar"
            src={"/assets/images/grandfather.png"}
          />
        </div>
        <div
          onClick={() => {
            chatBotModal.change("grandmother"), router.push("/chatbot");
          }}
          className="nd4 nds flex justify-center items-center"
        >
          <Image
            className="rounded-full"
            height="35"
            width="35"
            alt="Avatar"
            src={"/assets/images/granny.png"}
          />
        </div>
        <div
          onClick={() => {
            chatBotModal.change("mother"), router.push("/chatbot");
          }}
          className="nd3 nds flex justify-center items-center"
        >
          <Image
            className="rounded-full"
            height="35"
            width="35"
            alt="Avatar"
            src={"/assets/images/mother.png"}
          />
        </div>
        <button
          onClick={() => {
            chatBotModal.change("father"), router.push("/chatbot");
          }}
          className="nd1 nds flex justify-center items-center"
        >
          <Image
            className="rounded-full"
            height="35"
            width="35"
            alt="Avatar"
            src={"/assets/images/father.png"}
          />
        </button>
        <div id="floating-button" className="flex justify-center items-center">
          <Image
            className="rounded-full"
            height="40"
            width="40"
            alt="Avatar"
            src={"/assets/images/technology.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Bot;
