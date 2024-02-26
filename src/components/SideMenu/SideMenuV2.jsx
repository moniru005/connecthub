"use client";
import React from "react";
import { FaUniversity, FaHeart, FaRegBell } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const SideMenuV2 = () => {
  return (
    <div>
      {/* <div className="flex justify-between px-4 py-2 rounded-b-lg bg-white items-center ">
        <div>
          <h2 className="text-md font-bold">Followers</h2>
          <h2 className="text-gray-300">100 Followers</h2>
        </div>
        <div>
          <FaRegBell />
        </div>
      </div> */}

      <div className="flex justify-between px-4 py-2 rounded-t-lg bg-white items-center  ">
        <div>
          <h2 className="text-md font-bold">Studied at</h2>
          <h2 className="text-gray-300">University name</h2>
        </div>
        <div>
          <FaUniversity />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-2 bg-white items-center ">
        <div>
          <h2 className="text-md font-bold">Marital Status</h2>
          <h2 className="text-gray-300">Status</h2>
        </div>
        <div>
          <FaHeart />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-2 bg-white items-center ">
        <div>
          <h2 className="text-md font-bold">From</h2>
          <h2 className="text-gray-300">Location</h2>
        </div>
        <div>
          <FaEarthAmericas />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-2 bg-white items-center rounded-b-lg ">
        <div>
          <h2 className="text-md font-bold">Lives in</h2>
          <h2 className="text-gray-300">Location</h2>
        </div>
        <div>
          <CiLocationOn />
        </div>
      </div>
    </div>
  );
};

export default SideMenuV2;
