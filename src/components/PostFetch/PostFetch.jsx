"use client";

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUser from "../Hooks/useUser";

const PostFetch = () => {
  const [postsData, setPostsData] = useState([]);
  const { user } = useUser();
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    fetch("-https://connecthub-1.netlify.app/api/posts")
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
    if (postsData) {
      const filter = postsData.filter(
        (post) => post.authorEmail == user?.email
      );
      
      setUserPost(filter);
    }
  }, [postsData, user?.email]);
  // console.log(postsData);
  return (
    <div>
      {/* { postsData ? postsData.filter((post)=> post.authorEmail==user?.email).length: "no image"}  */}
      {userPost?.length}
    </div>
  );
};

export default PostFetch;
