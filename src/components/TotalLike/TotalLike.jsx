"use client"

import { useEffect, useState } from "react";
import useUser from "../Hooks/useUser";

const TotalLike = () => {
  const [postsData, setPostsData] = useState([]);
  const { user } = useUser();
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    fetch("https://connecthub-1.netlify.app/api/posts")
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
    if (postsData) {
      const filter = postsData.like?.filter(
        (post) => post.author == user?.displayName
      );
    //   console.log(filter);

      setUserPost(filter);
    }
  }, [postsData, user?.displayName]);
//   console.log(postsData);
  return <div>{userPost?.length}</div>;
};

export default TotalLike;
