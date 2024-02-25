import React from "react";
import { FaImage, FaLock, FaUser } from "react-icons/fa";
import useUser from "../Hooks/useUser";
import Swal from "sweetalert2";
import { redirect, useRouter } from "next/navigation";
import Loader from "@/app/loading";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axios from "axios";

const api_key = "2ada4fdae6c29ea9b5ef757d310870c7";
// console.log(api_key);
const hosting_api = `https://api.imgbb.com/1/upload?key=${api_key}`;

const RegisterForm = ({ show, setShow }) => {
  const { createUser, updateUserProfile, user, loading } = useUser();
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.image.files[0];
    const confirmPassword = e.target.confirmPassword.value;
    if (password == confirmPassword) {
      const imageFile = { image: photo };
      console.log(imageFile);
      const res = await axiosPublic.post(hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(res.data, "successfully image hosted");

      if (res.data.success) {
        const image = res.data.data.display_url;

        createUser(email, password)
          .then(async (res) => {
            updateUserProfile(name, image);

            const userData = {
              email,
              name,
              image,
            };

            const result = await axiosPublic.post("/users", userData);
            console.log(result.data);

            if (result.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Registered",
                showConfirmButton: false,
                timer: 1500,
              });
              router.push("/home");
            } else {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Try again",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Try with another email ",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Try with another image",
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
        <FaImage className="absolute left-0 top-[10px] pl-2 text-xl text-gray-300" />
        <input
          className="w-96 border rounded py-2 pl-8 pr-2"
          type="file"
          accept="image/*"
          name="image"
          placeholder="Add your image"
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
