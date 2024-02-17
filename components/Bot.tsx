import useChatBotModal from "@/hooks/useChatBotModal";
import Image from "next/image";
import React from "react";

const Bot = () => {
  const chatBotModal = useChatBotModal();

  return (
    <div>
      <p>{chatBotModal.type}</p>
      <div id="container-floating">
        <div
          onClick={() => chatBotModal.change("grandfather")}
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
          onClick={() => chatBotModal.change("grandmother")}
          className="nd4 nds flex justify-center items-center"
        >
          <Image
            className="rounded-full"
            height="35"
            width="35"
            alt="Avatar"
            src={"/assets/images/grandmother.png"}
          />
        </div>
        <div
          onClick={() => chatBotModal.change("mother")}
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
          onClick={() => chatBotModal.change("father")}
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
