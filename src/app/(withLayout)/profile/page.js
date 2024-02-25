"use client";
import Loader from "@/app/loading";
import useUser from "@/components/Hooks/useUser";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  const { user, loading } = useUser();
  const [show, setShow] =useState(false);

  // console.log(user);

  return (
    <>
      <Navbar></Navbar>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Friends</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400">Posts</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                {loading ? (
                  <Loader></Loader>
                ) : (
                  <Image
                    alt={user?.displayName}
                    className="rounded-full"
                    src={user?.photoURL}
                    height={"100"}
                    width={"250"}
                  ></Image>
                )}
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button onClick={() =>setShow(!show)} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 flex flex-row items-center justify-center gap-2">
                <FaEdit className="text-xl"/>
               <span> Update Profile</span>
              </button>
              
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {user?.displayName}
            </h1>
            <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>
            <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p>
          </div>
          {/* Form */}
          {
            show === true ? 
            <div className="w-full mt-4 flex flex-col gap-y-2 justify-center items-center">
            <form className="w-10/12 flex flex-col gap-y-2 rounded">
              {/* Name & Email */}
              <div className="w-full flex flex-col lg:flex-row gap-2 ">
                <input className="p-3 w-1/2 border border-slate-400 rounded-lg " type="text" name="" id="" placeholder="Name" defaultValue="" />
                <input className="p-3 w-1/2 border border-slate-400 rounded-lg" type="text" name="" id="" placeholder="Email" defaultValue="" />
              </div>
              {/* Institute & Marital Status */}
              <div className="w-full flex flex-col lg:flex-row gap-2 ">
                <input className="p-3 w-1/2 border border-slate-400 rounded-lg" type="text" name="institute" id="" placeholder="Your College / University Name" defaultValue="" />
                <input className="p-3 w-1/2 border border-slate-400 rounded-lg" type="text" name="mStatus" id="" placeholder="Marital Status" defaultValue="" />
              </div>
              {/* From & Lives In */}
              <div className="w-full flex flex-col lg:flex-row gap-2 ">
                <input className="p-3 w-1/2 border border-slate-400 rounded-lg" type="text" name="whereFrom" id="" placeholder="Where you from" defaultValue="" />
                <input className="p-3 w-1/2 border border-slate-400 rounded-lg" type="text" name="livesIn" id="" placeholder="Currently Lives In" defaultValue="" />
              </div>
              {/* Submit */}
              <div className="w-full flex flex-col lg:flex-row gap-2 justify-center items-center mt-4 ">
                <input className="btn bg-blue-400 hover:bg-blue-500 text-gray-700 px-4 py-1 upper" type="button" value="Update" />
              </div>
            </form>
          </div>
          :
          ""
          }

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
