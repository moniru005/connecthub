"use client"
import { useEffect, useState } from 'react';
import SinglePostCard from './SinglePostCard';

const PostCard = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then(response => response.json())
      .then(data => setPostsData(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  console.log(postsData)

  return (
    <div>
      <div>test post</div>
      {postsData.map((post, index) => (
        <SinglePostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default PostCard;
