"use client"
import { CiMenuKebab } from "react-icons/ci";

const RightRideBar = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] w-full rounded-md">
        <div className="flex justify-between gap-7 p-2">
            <h2>Stories</h2>
            <CiMenuKebab className="text-2xl font-semibold"></CiMenuKebab>
        </div>
      </div>
    </div>
  );
};

export default RightRideBar;
