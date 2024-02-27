import { useEffect, useState } from "react";

const usePosts = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return{ postsData};
};

export default usePosts;
