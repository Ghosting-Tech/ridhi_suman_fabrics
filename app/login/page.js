"use client";

import { useState } from "react";

import SignupForm from "@/components/layout/onBoard/login/SignupForm";
import SigninForm from "@/components/layout/onBoard/login/SigninForm";

import LeftOverlayContent from "@/components/layout/onBoard/login/LeftOverlayContent";
import RightOverlayContent from "@/components/layout/onBoard/login/RightOverlayContent";

const OnboardPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg = "bg-gradient-to-r from-red-400 to-pink-400";

  return (
    <div className="h-screen bg-white relative overflow-hidden selection:bg-red-200 selection:text-black">
      <div
        id="signin"
        className={`bg-white absolute top-0 left-0 h-full w-full lg:w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
          isAnimated ? "lg:translate-x-full opacity-0" : ""
        }`}
      >
        <SigninForm setIsAnimated={setIsAnimated} isAnimated={isAnimated} />
      </div>

      <div
        id="signup"
        className={`absolute top-0 left-0 h-full w-full lg:w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
          isAnimated
            ? "lg:translate-x-full opacity-100 z-50 animate-show"
            : "opacity-0 z-10"
        }`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <SignupForm setIsAnimated={setIsAnimated} isAnimated={isAnimated} />
        </div>
      </div>

      <div
        id="overlay-container"
        className={`absolute top-0 left-1/2 w-0 lg:w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-30 lg:block hidden ${
          isAnimated ? "-translate-x-full" : ""
        }`}
      >
        <div
          id="overlay"
          className={`${overlayBg} relative -left-full h-full w-[200%] transform transition-transform duration-700 ease-in-out ${
            isAnimated ? "translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div
            id="overlay-left"
            className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <LeftOverlayContent
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>

          <div
            id="overlay-right"
            className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-[20%]" : "translate-x-0"
            }`}
          >
            <RightOverlayContent
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardPage;
