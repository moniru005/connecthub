"use client"
import React from "react";
import HomePage from "./(withLayout)/home/page";
import Login from "@/components/Login/Login";
import useUser from "@/components/Hooks/useUser";

const LandingPage = () => {

  const {user} = useUser()

  console.log(user)
  return (
    <div style={{fontFamily: "work sans"}}>
      <Login></Login>
    </div>
  );
};

export default LandingPage;
