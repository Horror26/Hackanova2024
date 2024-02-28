import Questions from "@/components/shared/Questions";
import React from "react";

export const metadata={
  title:"Quiz page",
  description:"Understanding your personality by few questions"
}
const page = () => {
  return (
    <div className="w-screen mb-16">
      <Questions />
    </div>
  );
};

export default page;
