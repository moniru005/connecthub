import Image from "next/image";
import React from "react";
import { FaRegBell, FaRegEnvelope, FaRegHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar w-full z-50 px-3 bg-base-100 fixed">
      <div className="flex-1 gap-8 items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image className="h-10 w-10" src={logo} alt="connectHub-logo" />
          <a className=" text-sm lg:text-xl text-[#3D70B2] font-bold">ConnectHub</a>
        </div>

        {/* Icons */}
        <div className="text-xl">
          <button className="btn-md text-xl">
            <FaRegHeart />
          </button>
          <button className="btn-md text-xl">
            <FaRegBell />
          </button>
          <button className="btn-md text-xl">
            <FaRegEnvelope></FaRegEnvelope>
          </button>
          <button className="btn-md text-xl">
            <FaRegMessage></FaRegMessage>
          </button>
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className=" relative form-control hidden lg:flex flex-row items-center ">
          <CiSearch className="absolute left-1 z-20 text-xl text-slate-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 relative z-10 input input-bordered rounded-full focus:outline-none w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                width={50}
                height={50}
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
