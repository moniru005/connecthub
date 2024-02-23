"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import logoWhite from "@/assets/logo-white.png";
import useUser from "../Hooks/useUser";
import { useRouter } from "next/navigation";
import Loader from "@/app/loading";

const Login = () => {
  const {user, loading} = useUser()
  const [show, setShow] = useState(true);
  const router = useRouter()
  
if(!loading){
  return <Loader></Loader>
}
  if(user){
    router.push('home')
    return
  }

  return (
    <div className="relative h-screen bg-none">
      
      <div className="lg:flex hidden absolute left-[45%] top-[50%] w-28 h-28 rounded-full border-8 border-white bg-[#69A2E9] p-1">
        <Image className="w-full p-1.5 rounded-full" src={logoWhite} alt="" />
      </div>
      <div className="flex flex-row">
        {/* left */}
        <div className="w-1/2 h-screen bg-[#69A2E9] hidden lg:flex items-center mx-auto ">
          <div className="w-full flex justify-center items-center">
            <h2 className="text-6xl text-white font-extrabold space-y-3 flex flex-col">
              <span style={{ textShadow: "4px 4px #3180e1, 8px 8px #3180e1" }}>
                Join an
              </span>
              <span style={{ textShadow: "4px 4px #3180e1, 8px 8px #3180e1" }}>
                Exciting Social{" "}
              </span>
              <span style={{ textShadow: "4px 4px #3180e1, 8px 8px #3180e1" }}>
                Experience.
              </span>
            </h2>
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 h-screen flex items-center mx-auto my-12 lg:my-0">
          <div className="w-full flex flex-col justify-center items-center">
            {/* <div className="w-32 h-32 rounded-full border-2 border-gray-200">
              <Image className="w-32 p-1.5 rounded-full" src={photo} alt="" />
            </div> */}
            {/* Login Form */}
            <div>
              {show ? (
                <LoginForm show={show} setShow={setShow} />
              ) : (
                <RegisterForm show={show} setShow={setShow} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
