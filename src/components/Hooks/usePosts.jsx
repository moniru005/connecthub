import { useEffect, useState } from "react";

const usePosts = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch("-https://connecthub-1.netlify.app/api/posts")
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return{ postsData};
};

export default usePosts;
