"use client"
import React from "react";
import useUser from "@/components/Hooks/useUser";
import Loader from "./loading";
import LoginPage from "./login/page";
// import HomeV2 from "./(withLayout)/home2/page";



const LandingPage = () => {

  const { user, loading } = useUser()

  if (loading && user) {
    return <Loader></Loader>
  }
  return (
    <div style={{fontFamily: "work sans"}}>
        <LoginPage/>
    </div>
  );
};

export default LandingPage;
