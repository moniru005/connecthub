import ProfilePage from "@/app/(withLayout)/profile/page";
import CommentForm from "@/components/CommentForm/CommentForm";

import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";
import CreatePostFormV2 from "@/components/CreatePostForm/CreatePostFormV2";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import PostCard from "@/components/PostCard/PostCard";
import RightRideBar from "@/components/RightSideBar/RightRideBar";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomeV2 = () => {
  return (
    <div className="w-full px-3 max-w-7xl mx-auto">
      <Navbar />
      <div className="w-full mx-auto pt-28 bg-[#F4F4F4] px-4 flex justify-center gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-4/12 lg:order-1 order-2 mb-8 lg:max-w-md">
          <LeftSideBar className='fixed' />
        </div>
        <div className="w-full lg:w-8/12 mx-auto bg-[#F4F4F4] lg:order2 order-1">
          {/* <h2 className="text-4xl text-red-500">Home Page</h2> */}
          {/* <CreatePostForm /> */}
          <CreatePostFormV2></CreatePostFormV2>
          {/* Post Cards */}
          <PostCard />
        </div>
        {/* <div className="w-full lg:w-3/12 bg-[#F4F4F4] lg:order-3 order-2">
          <RightRideBar />
        </div> */}
      </div>
    </div>
  );
};

export default HomeV2;
