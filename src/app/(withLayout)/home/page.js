import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import PostCard from "@/components/PostCard/PostCard";
import RightRideBar from "@/components/RightSideBar/RightRideBar";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full px-3 ">
      <div><Navbar/></div>
      <div className="w-full mx-auto pt-28 bg-[#F4F4F4] px-28 grid-cols-1 lg:grid lg:grid-cols-4 gap-3  ">

        <div className="col-span-1 hidden lg:block ">   <LeftSideBar /> </div>
        <div className=" w-full mx-auto  lg:col-span-2 bg-[#F4F4F4] ">
           <CreatePostForm></CreatePostForm> 
           <PostCard/>
            </div>
        <div className="col-span-1 hidden lg:block  bg-[#F4F4F4]  ">  <RightRideBar /> </div>
      </div>
    </div>
  );
};

export default HomePage;
