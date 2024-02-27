"use client";
import Loader from "@/app/loading";
import useDBUser from "@/components/Hooks/useDBUser";
import useUser from "@/components/Hooks/useUser";
import ProfileForm from "@/components/ProfileForm/ProfileForm";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";


const ProfilePage = () => {
  const { user, loading } = useUser();
  const [show, setShow] = useState(false);
  const [usersData, setUsersData] = useState('');
  const userData = useDBUser();






  useEffect(() => {
    const currentUser = userData?.filter((data) => data.email == user?.email);
    // console.log(currentUser);
    setUsersData(currentUser)

  }, [userData, user?.email]);

  // console.log(postsData);



  // console.log(user);

  return (
    <>
      <div className='w-full px-3 max-w-7xl mx-auto'>
        <Navbar></Navbar>
      
      <div className='p-16'>
        <div className='p-8 bg-white shadow mt-24'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0'>
              <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Like</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl"> 23 </p>
                <p className="text-gray-400">Posts</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                {loading ? (
                  <Loader></Loader>
                ) : (
                  <Image
                    alt={user?.displayName}
                    className="rounded-full w-48 h-48 bg-cover"
                    src={user?.photoURL}
                    height={"250"}
                    width={"250"}
                  ></Image>
                )}
              </div>
            </div>
            <div className="space-x-8 pt-3 mx-auto flex justify-between mt-32 md:mt-0 md:justify-center">
              <button onClick={() => setShow(!show)} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 flex flex-row items-center justify-center gap-2">
                <FaEdit className="text-xl" />
                <span> Update Profile</span>
              </button>

            </div>
          </div>

          <div className="mt-20 text-center  pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {user?.displayName}
            </h1>
            <p className="font-light text-gray-600 mt-3"> {usersData[0]?.livesIn} </p>
            {/* <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p> */}
            <p className="mt-2 text-gray-500"> {usersData[0]?.institute} </p>
          </div>

          {/* Form */}
          <ProfileForm show={show} />

          {/* <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
          </div> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default ProfilePage;
