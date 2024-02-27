"use client";
import { useEffect, useState } from "react";
import SinglePostCard from "./SinglePostCard";
import useUser from "../Hooks/useUser";


const PostCard = () => {
  const [postsData, setPostsData] = useState([]);
  const {user}= useUser();


  useEffect(() => {
    fetch("https://connecthub-1.netlify.app/api/posts")
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
    
  }, []);


  return (
      <div>
        {postsData.map((post, index) => (
          <SinglePostCard key={index} post={post}  />
        ))}
      </div>
  );
};

export default PostCard;
