"use client"
import React from "react";
import HomePage from "./(withLayout)/home/page";
import Login from "@/components/Login/Login";
import useUser from "@/components/Hooks/useUser";
import Loader from "./loading";

const LandingPage = () => {

  const {user, loading} = useUser()

  if(loading && user){
    return <Loader></Loader>
  }
  return (
    <div style={{fontFamily: "work sans"}}>
      {
        user? <HomePage></HomePage> : <Login></Login>
      }
    </div>
  );
};

export default LandingPage;
