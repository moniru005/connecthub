"use client";
import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import useUser from "../Hooks/useUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const LoginForm = ({ show, setShow }) => {
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };

    await login(email, password)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/homeV2");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Error while login",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mt-6 w-full flex justify-center 
    flex-col gap-y-4 items-center"
    >
      <div className="w-full text-center py-6">
        <h2 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#477ec1]">
          Login
        </h2>
      </div>
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
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>

      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="btn w-96 rounded-full bg-[#5e9ae3] hover:bg-[#69A2E9]  text-white text-base"
        >
          Login
        </button>
      </div>

      <div className="flex justify-center w-full">
        <h2 onClick={() => setShow(false)} className="text-sm">
          If new here? Please
          <span className="hover:text-black text-[#69A2E9] pl-1 cursor-pointer">
            Register
          </span>{" "}
          .
        </h2>
      </div>
    </form>
  );
};

export default LoginForm;
