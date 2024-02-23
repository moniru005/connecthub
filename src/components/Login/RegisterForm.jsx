import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import useUser from "../Hooks/useUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const RegisterForm = ({ show, setShow }) => {
  const { createUser } = useUser();
  const router = useRouter();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password == confirmPassword) {
      createUser(email, password)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "successfully Registered",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/home");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Error while Register",
            showConfirmButton: false,
            timer: 1500,
          });
        });

      console.log(email);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password does not Match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form
      onSubmit={handleCreateUser}
      className="mt-6 w-full flex justify-center flex-col gap-y-4 items-center"
    >
      <div className="w-full text-center py-6">
        <h2 className="lg:text-4xl md:text-4xl text-xl font-bold text-[#477ec1]">
          Sign Up
        </h2>
      </div>
      <div className="relative">
        <FaUser className="absolute left-0 top-[10px] pl-2 text-xl text-gray-300" />
        <input
          className="w-96 border rounded py-2 pl-8 pr-2"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="relative">
        <FaUser className="absolute left-0 top-[10px] pl-2 text-xl text-gray-300" />
        <input
          className="w-96 border rounded py-2 pl-8 pr-2"
          type="text"
          name="name"
          placeholder="Full Name"
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

      <div className="relative">
        <FaLock className="absolute left-0 top-[10px] pl-2 text-xl text-gray-300" />
        <input
          className="w-96 border rounded py-2 pl-8 pr-2"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>

      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="btn w-96 rounded-full bg-[#5e9ae3] hover:bg-[#69A2E9]  text-white text-base"
        >
          Register
        </button>
      </div>

      <div className="flex justify-center w-full">
        <h2 onClick={() => setShow(true)} className="text-sm">
          Already have an account? Please
          <span className="hover:text-black text-[#69A2E9] pl-1 cursor-pointer">
            Login
          </span>
          .
        </h2>
      </div>
    </form>
  );
};

export default RegisterForm;
