"use client";
import React, { useEffect, useState } from "react";
import { FaUniversity, FaHeart, FaRegBell } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import useUser from "../Hooks/useUser";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SideMenuV2 = () => {
  const { user } = useUser();
  console.log(user.email);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  console.log(usersData);

  // const [userData, setUserData] = useState([]);

  const currentUser = usersData?.filter((data) => data.email == user?.email);
  console.log(currentUser);

  return (
    <div className="">
      {/* <div className="flex justify-between px-4 py-2 rounded-b-lg bg-white items-center ">
        <div>
          <h2 className="text-md font-bold">Followers</h2>
          <h2 className="text-gray-300">100 Followers</h2>
        </div>
        <div>
          <FaRegBell />
        </div>
      </div> */}

      <div className="flex justify-between px-4 py-2 rounded-t-lg bg-white items-center  ">
        <div>
          <h2 className="text-md font-bold">Studied at</h2>
          <h2 className="text-gray-300">
            {currentUser?.institute || "University name"}
          </h2>
        </div>
        <div>
          <FaUniversity />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-2 bg-white items-center ">
        <div>
          <h2 className="text-md font-bold">Marital Status</h2>
          <h2 className="text-gray-300">Status</h2>
        </div>
        <div>
          <FaHeart />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-2 bg-white items-center ">
        <div>
          <h2 className="text-md font-bold">From</h2>
          <h2 className="text-gray-300">Location</h2>
        </div>
        <div>
          <FaEarthAmericas />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-2 bg-white items-center rounded-b-lg ">
        <div>
          <h2 className="text-md font-bold">Lives in</h2>
          <h2 className="text-gray-300">Location</h2>
        </div>
        <div>
          <CiLocationOn />
        </div>
      </div>
    </div>
  );
};

export default SideMenuV2;
