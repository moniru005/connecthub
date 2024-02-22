"use client"
import Image from "next/image";
import React, { useState } from "react";
import photo from "@/assets/jenna.jpg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="h-screen bg-none">
      <div className="flex flex-row">
        {/* left */}
        <div className="w-1/2 h-screen bg-[#69A2E9] flex items-center mx-auto ">
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
        <div className="w-1/2 h-screen flex items-center mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-200">
              <Image className="w-32 p-1.5 rounded-full" src={photo} alt="" />
            </div>
            {/* Login Form */}
            <div>
              {
                show? <LoginForm show={show} setShow={setShow}/> : <RegisterForm show={show} setShow={setShow}/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
