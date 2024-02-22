import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import PostCard from "@/components/PostCard/PostCard";
import RightRideBar from "@/components/RightSideBar/RightRideBar";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full px-3 ">
      <div>
        <Navbar />
      </div>

      <div className="w-full  mx-auto pt-28 bg-[#F4F4F4] px-4 flex  justify-around gap-2 flex-col lg:flex-row ">
        {/* left side */}
        <div className=" w-full lg:w-3/12 lg:order-1 order-3 mb-8">
          <LeftSideBar />
        </div>
        {/* center side  */}
        <div className=" w-full lg:w-6/12 mx-auto bg-[#F4F4F4] lg:order2  order-1 ">
          <CreatePostForm></CreatePostForm>
          <PostCard />
        </div>
        {/* right */}
        <div className=" w-full lg:w-3/12  bg-[#F4F4F4] lg:order-3 order-2">
          <RightRideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
