"use client"
import React from "react";
import HomePage from "./(withLayout)/home/page";
import Login from "@/components/Login/Login";
import useUser from "@/components/Hooks/useUser";
import Loader from "./loading";
import HomeV2 from "./(withLayout)/homeV2/page";

const LandingPage = () => {

  const {user, loading} = useUser()

  if(loading && user){
    return <Loader></Loader>
  }
  return (
    <div style={{fontFamily: "work sans"}}>
      {
        // user? <HomePage></HomePage> : <Login></Login>
        // user? <HomeV2/>: <Login></Login>
        <HomeV2/>
      }
    </div>
  );
};

export default LandingPage;
