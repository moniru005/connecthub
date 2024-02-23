
"use client"
import useUser from "@/components/Hooks/useUser";
import Login from "@/components/Login/Login";
import { useRouter } from "next/navigation";
import React from "react";
import HomePage from "./(withLayout)/home/page";
import Loader from "./loading";

const LandingPage = () => {
  const router = useRouter()
  const {user, loading} = useUser()

  // if(user){
  //   router.push('/home')
  //   return null
  // }
  // if(!loading){
  //   return <Loader></Loader>
  // }
  return (
    <div style={{fontFamily: "work sans"}}>
      {
        user? <HomePage></HomePage>: <Login></Login>
      }
    </div>
  );
};

export default LandingPage;
