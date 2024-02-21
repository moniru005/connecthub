"use client";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import birthdaycake from "../../assets/birthdaycake.png";
import { IoGift } from "react-icons/io5";

const RightRideBar = () => {
  return (
    <div className="w-full  ">
      <div className="bg-[#FFFFFF] w-full px-2 shadow-sm  rounded-lg">
        <div className="flex pb-6 justify-between text-gray-400 items-center py-4 mb-4 gap-7 p-2">
          <h2>Stories</h2>
          <CiMenuKebab className="text-2xl font-semibold"></CiMenuKebab>
        </div>
        <hr />
        {/* add story */}
        <div className="flex  py-6 justify-around items-center gap-1 w-full">
          <div className=" border-dashed duration-400 hover:border-[#3D70B2] hover:border-solid border-2 p-4 rounded-full  ">
            <IoAdd className=" text-gray-300 hover:text-[#3D70B2] duration-400 text-2xl"></IoAdd>
          </div>
          <div className="px-3">
            <h2 className="text-[#394960] text-lg font-semibold ">
              Add a New Story
            </h2>
            <p className="text-sm text-gray-500">
              Share an image, a video or some text
            </p>
          </div>
        </div>
        <hr />
        {/* active user container */}
        <div className="mt-3 p-3">
          <div className="flex  w-full  justify-start items-center  gap-2">
            <div className="border-2 rounded-full my-3 border-gray-400">
              <Image
                width={50}
                height={50}
                className="rounded-full p-1  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <div className="mb-2">
              <p className="font-semibold">Name </p>
              <p className="text-sm text-gray-400 "> 1 hour ago</p>
            </div>
          </div>
          <hr />
          <div className="flex  w-full  justify-start items-center  gap-2">
            <div className="border-2 rounded-full my-3 border-gray-400">
              <Image
                width={50}
                height={50}
                className="rounded-full p-1  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <div className="mb-2">
              <p className="font-semibold">Name </p>
              <p className="text-sm text-gray-400 "> 1 hour ago</p>
            </div>
          </div>
          <hr />
          <div className="flex  w-full  justify-start items-center  gap-2">
            <div className="border-2 rounded-full my-3 border-gray-400">
              <Image
                width={50}
                height={50}
                className="rounded-full p-1  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <div className="mb-2">
              <p className="font-semibold">Name </p>
              <p className="text-sm text-gray-400 "> 1 hour ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* birthday card */}

      <div className="my-10">
        <div className="card w-full bg-[#34ffe4]  shadow-xl image-full">
          <figure className="relative">
            <Image
              height={400}
              className="opacity-40"
              width={400}
              src={birthdaycake}
              alt="Shoes"
            />
            <div className="bg-[#45D7C4] bg-opacity-50 contrast-200 absolute h-[400px] w-[400px] top-0 ">
             
            </div>
          </figure>

          <div className="card-body">
            <div className=" flex justify-between items-center mb-3">
              <IoGift className="text-2xl"></IoGift>
              <CiMenuKebab className="text-2xl  font-bold"></CiMenuKebab>
            </div>
            <div className="card-title w-full relative mx-auto  text-center">
              <Image
                width={50}
                height={50}
                className="rounded-full mx-auto p-1 text-center  "
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <p className="bg-[#344258]  text-sm rounded-full absolute right-[36%] top-0">
                34
              </p>
            </div>
            <p className="text-center">name turns 31 today!</p>
            <p className="text-center text-sm ">
              Send him your best wishes by leaving something on his wall.
            </p>
            <button className="btn btn-outline text-white hover:bg-white hover:text-black border-white">
              Write message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightRideBar;
