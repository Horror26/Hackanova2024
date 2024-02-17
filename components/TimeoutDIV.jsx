"use client";
import React from "react";
import { useRouter } from "next/router";

const TimeoutDIV = ({ children }) => {
//   const router = useRouter();
//   const redirectToTimeout = () => {
//     // Use the router.push() method to redirect to another page
//     router.push("/session-timeout");
//   };
//   localStorage.setItem("session", "false"); // Store as string
//   setTimeout(5000, redirectToTimeout);
  return <div style={{ width: "100%", height: "100%" }}>{children}</div>;
};
export default TimeoutDIV;
