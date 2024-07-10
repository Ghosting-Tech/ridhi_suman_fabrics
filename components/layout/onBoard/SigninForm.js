"use client";

import { Input } from "@material-tailwind/react";
import { AiOutlineLoading } from "react-icons/ai";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SigninForm = ({ isAnimated, setIsAnimated }) => {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // async function onSubmit(e) {
  //   e.preventDefault();

  //   const response = await signIn("credentials", {
  //     redirect: false,
  //     phoneNumber,
  //     password,
  //   });

  //   if (response.ok) {
  //     router.push("/");
  //   }

  // }

  const onSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    if (!phoneNumber) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    const promiseFunction = () =>
      new Promise(async (resolve, reject) => {
        try {
          const response = await signIn("credentials", {
            redirect: false,
            phoneNumber,
            password,
          });

          if (response.ok) {
            resolve(response);
          } else {
            reject("Invalid credentials");
          }
        } catch (error) {
          reject(error);
        }
      });

    toast.promise(promiseFunction(), {
      loading: "Logging in...",
      success: () => {
        router.push("/");
        setIsLoading(false);
        return "Logged in successfully";
      },
      error: (error) => `${error.message || error}`,
    });
  };

  return (
    <div className="lg:w-3/4 w-11/12 max-w-md">
      <div className="flex flex-col justify-center items-center w-full space-y-10">
        <h1 className="text-4xl font-bold text-pink-500">Welcome back!</h1>

        <form className="mt-8 w-full" onSubmit={onSubmit} method="POST">
          <div className="space-y-8">
            <Input
              type="number"
              size="regular"
              variant="standard"
              label="Your Number"
              placeholder="Number"
              required
              name="login-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              type="text"
              size="regular"
              variant="standard"
              label="Your Password"
              placeholder="Password"
              required
              name="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            href={"/forget"}
            className="mt-4 block text-sm text-right font-medium text-blue-600 hover:underline focus:outline-none"
          >
            Forgot your password?
          </Link>

          <button
            type="submit"
            className="mt-8 py-4 transition-all duration-500 uppercase rounded-full bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 active:scale-100 text-white font-semibold w-full cursor-pointer"
          >
            {isLoading ? (
              <AiOutlineLoading className=" animate-spin mx-auto" size={24} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>

      <div className="flex gap-1 items-center mt-4 text-sm justify-center">
        <div>Don&apos;t have and account yet?</div>

        <button
          className=" text-blue-600 hover:underline focus:outline-none font-medium underline hover:scale-105 transition-transform"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SigninForm;
