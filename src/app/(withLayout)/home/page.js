
import ProfilePage from "@/app/(withLayout)/profile/page";
import CommentForm from "@/components/CommentForm/CommentForm";
import CreatePostForm from "@/components/CreatePostForm/CreatePostForm";
import useUser from "@/components/Hooks/useUser";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import PostCard from "@/components/PostCard/PostCard";
import RightRideBar from "@/components/RightSideBar/RightRideBar";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomePage = () => {
  // const router = useRouter();

  // const { user, loading } = useUser();

  // if (loading) {
  //   return <Loader />;
  // }

  // if (!user) {
  //   router.push('/');
  //   return null; // or you can return a "Login" component here if you have one
  // }

  return (
    <div className="w-full px-3">
      <Navbar />

      <div className="w-full mx-auto pt-28 bg-[#F4F4F4] px-4 flex justify-around gap-2 flex-col lg:flex-row">
        <div className="w-full lg:w-3/12 lg:order-1 order-3 mb-8">
          <LeftSideBar />
        </div>
        <div className="w-full lg:w-6/12 mx-auto bg-[#F4F4F4] lg:order2 order-1">
          <CreatePostForm />
          <ProfilePage></ProfilePage>
          <PostCard />
        </div>
        <div className="w-full lg:w-3/12 bg-[#F4F4F4] lg:order-3 order-2">
          <RightRideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
