"use client";

import { Input } from "@material-tailwind/react";
import { AiOutlineLoading } from "react-icons/ai";

import { signIn } from "next-auth/react";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SigninForm = ({ isAnimated, setIsAnimated }) => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (password && confirmPassword && password !== confirmPassword) {
        toast.error("Passwords do not match");
      }

      if (password && confirmPassword && password === confirmPassword) {
        toast.success("Passwords matched");
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [password, confirmPassword]);

  const onSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    if (!confirmPassword) {
      toast.error("Please enter your phone number");
      return;
    }

    const token = localStorage.getItem("reset-token");

    const formDataToSend = new FormData();
    formDataToSend.append("token", token);
    formDataToSend.append("password", password);

    console.log("Form Data: ", formDataToSend);

    let data;

    const promiseFunction = () =>
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch("api/reset-password", {
            method: "POST",
            body: formDataToSend,
          });

          data = await response.json();
          console.log("Data: ", data);

          if (!response.ok) {
            reject(data);
          }

          const isSignIn = await signIn("credentials", {
            redirect: false,
            phoneNumber: data.user.phoneNumber,
            password,
          });

          if (!isSignIn.ok) {
            reject("Something went wrong: Cannot Sign In");
          }

          router.push("/");

          resolve(data);
        } catch (error) {
          reject(error);
        }
      });

    toast.promise(promiseFunction(), {
      loading: "Resetting Password...",

      success: () => {
        setIsLoading(false);

        setPassword("");
        setConfirmPassword("");

        localStorage.removeItem("reset-token");

        return "Password Reset Successfully";
      },

      error: (error) => {
        setIsLoading(false);

        return `${error.message || error || "Something went wrong"}`;
      },
    });
  };

  return (
    <div className="lg:w-3/4 w-11/12 max-w-md">
      <div className="flex flex-col justify-center items-center w-full space-y-10">
        <h1 className="text-4xl font-bold text-pink-500">
          Reset Your Password!
        </h1>

        <form className="mt-8 w-full" onSubmit={onSubmit} method="POST">
          <div className="space-y-8">
            <Input
              type="password"
              size="regular"
              variant="standard"
              label="Your New Password"
              placeholder="Password"
              required
              name="reset-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              type="password"
              size="regular"
              variant="standard"
              label="Confirm Password"
              placeholder="Password"
              required
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-8 py-4 transition-all duration-500 uppercase rounded-full bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 active:scale-100 text-white font-semibold w-full cursor-pointer disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            disabled={password !== confirmPassword || isLoading}
          >
            {isLoading ? (
              <AiOutlineLoading className=" animate-spin mx-auto" size={24} />
            ) : (
              "Update Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
