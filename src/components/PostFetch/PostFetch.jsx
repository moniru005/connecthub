"use client"

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const PostFetch = () => {
  const [postsData, setPostsData] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  console.log(postsData);
  return <div></div>;
};

export default PostFetch;