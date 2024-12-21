"use client";
import Image from "next/image";
import { CiBank } from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-in";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left column - Hero Image */}
      <div
        className="hidden w-1/2 bg-cover bg-center lg:block"
        style={{
          backgroundImage: "url('/logoWithTheme.png?height=1080&width=1920')",
        }}
      >
        <div className="flex h-full items-center justify-center bg-black bg-opacity-40">
        </div>
      </div>
      {/* Right column - Sign In Form */}
      <div className="flex w-full items-center justify-center lg:w-1/2 p-4 bg-neutral-900 bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)]">
        <div className="w-full max-w-md space-y-8">
          {/* Sign in code */}
          <SignUp.Root>
            <SignUp.Step
              name="start"
              className="w-full space-y-6 rounded-2xl bg-neutral-900 bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 py-10 sm:px-8"
            >
              <header className="text-center">
                <Image
                  src="/logo.png?height=128&width=128"
                  alt="Logo"
                  width={128}
                  height={128}
                  className="mx-auto mb-4"
                />
                <h1 className="mt-4 text-xl font-medium tracking-tight text-white">
                  Sign Up to Bakas
                </h1>
              </header>
              <Clerk.GlobalError className="block text-sm text-red-400" />
              <div className="space-y-2">
                <Clerk.Connection
                  name="google"
                  className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 16"
                    className="w-4"
                    aria-hidden
                  >
                    <path
                      fill="currentColor"
                      d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                    />
                  </svg>
                  Login with Google
                </Clerk.Connection>
              </div>
              <p className="text-center text-sm text-neutral-400">
                Already Bakas member?{" "}
                <Clerk.Link
                  navigate="sign-in"
                  className="font-medium text-white decoration-white/20 underline-offset-4 outline-none hover:underline focus-visible:underline"
                >
                  Log In
                </Clerk.Link>
              </p>
            </SignUp.Step>
          </SignUp.Root>
          {/* Sign in code end */}
          <div className="mt-8">
            <h3 className="mb-4 text-center text-sm font-medium text-gray-500">
              Trusted By
            </h3>
            <div className="flex justify-center space-x-4">
              <CiBank className="text-gray-400" size={48} />
              <IoSchoolSharp className="text-gray-400" size={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

