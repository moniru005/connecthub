"use client"
import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import useUser from "../Hooks/useUser";

const LoginForm = ({show, setShow}) => {
  const {login} = useUser()

  const handleLogin = async(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

     await login(email, password)
    .then((res)=>{
      
    })
    .catch((err)=>console.log(err))

  }


  return (
    <form onSubmit={handleLogin} className="mt-6 w-full flex justify-center flex-col gap-y-4 items-center">
      <div className="relative">
        <FaUser className="absolute left-0 top-[10px] pl-2 text-xl text-gray-300" />
        <input
          className="w-96 border rounded py-2 pl-8 pr-2"
          type="text"
          name="email"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="relative">
        <FaLock className="absolute left-0 top-[10px] pl-2 text-xl text-gray-300" />
        <input
          className="w-96 border rounded py-2 pl-8 pr-2"
          type="text"
          name="password"
          placeholder="Password"
        />
      </div>

      <div className="flex justify-center w-full">
        <button type="submit" className="btn w-96 rounded-full bg-[#5e9ae3] hover:bg-[#69A2E9]  text-white text-base">
          Login
        </button>
      </div>

      <div className="flex justify-center w-full">
        <h2  onClick={() =>setShow(false)} className="text-sm">
          If new here? Please
            <span className="hover:text-black text-[#69A2E9] pl-1 cursor-pointer">Register</span> .
        </h2>
      </div>
    </form>
  );
};

export default LoginForm;
