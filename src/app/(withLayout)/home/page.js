import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import RightRideBar from "@/components/RightSideBar/RightRideBar";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
        <Navbar/>
      <LeftSideBar />
      <RightRideBar />
    </div>
  );
};

export default HomePage;
