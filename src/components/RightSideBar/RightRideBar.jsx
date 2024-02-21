"use client";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";

const RightRideBar = () => {
  return (
    <div className="w-full ">
      <div className="bg-[#FFFFFF] w-full px-2  rounded-lg">
        <div className="flex pb-6 justify-between py-4 mb-4 gap-7 p-2">
          <h2>Stories</h2>
          <CiMenuKebab className="text-2xl font-semibold"></CiMenuKebab>
        </div>
        <hr />
        {/* add story */}
        <div className="flex  py-6 justify-around items-center gap-1 w-full">
          <div className=" border-dashed duration-400 hover:border-[#3D70B2] hover:border-solid border-2 p-3 rounded-full  ">
            <IoAdd className=" text-gray-300 hover:text-[#3D70B2] duration-400 text-3xl"></IoAdd>
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
                width={60}
                height={60}
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
                width={60}
                height={60}
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
                width={60}
                height={60}
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
    </div>
  );
};

export default RightRideBar;