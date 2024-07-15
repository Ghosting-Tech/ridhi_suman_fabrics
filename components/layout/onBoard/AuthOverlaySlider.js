import { usePathname } from "next/navigation";

import OverlayContent from "./OverlayContent";
import OverlayContentBtn from "./OverlayContentBtn";

const AuthOverlaySlider = ({ isAnimated, setIsAnimated }) => {
  const path = usePathname();

  return (
    <>
      <div
        id="overlay-left"
        className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform transition-transform duration-700 ease-in-out ${
          isAnimated ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {path === "/onBoard" ? (
          <OverlayContent
            heading={"Already have an account?"}
            paragraph={"Sign in with your Phone number & password"}
          >
            <OverlayContentBtn
              setIsAnimated={setIsAnimated}
              buttonLabel="Sign In"
            />
          </OverlayContent>
        ) : (
          <OverlayContent
            heading={"Set a new password"}
            paragraph={"Fill your new password and confirm it"}
          >
            <OverlayContentBtn
              setIsAnimated={setIsAnimated}
              buttonLabel="Sign In"
            />
          </OverlayContent>
        )}
      </div>

      <div
        id="overlay-right"
        className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition-transform duration-700 ease-in-out ${
          isAnimated ? "translate-x-[20%]" : "translate-x-0"
        }`}
      >
        {path === "/onBoard" ? (
          <OverlayContent
            heading="Don't have an account?"
            paragraph="Start your journey in one click"
          >
            <OverlayContentBtn
              setIsAnimated={setIsAnimated}
              buttonLabel="Sign Up"
            />
          </OverlayContent>
        ) : (
          <OverlayContent
            heading={"Forgot your password?"}
            paragraph={"Enter your phone number to reset your password"}
          >
            <OverlayContentBtn
              setIsAnimated={setIsAnimated}
              buttonLabel="Sign Up"
            />
          </OverlayContent>
        )}
      </div>
    </>
  );
};

export default AuthOverlaySlider;
