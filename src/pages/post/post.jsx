import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const POST_BY_ID = "https://jsonplaceholder.typicode.com/posts";
export const Post = () => {
  const [post, setPost] = useState(null);
  const { postId} = useParams();

  const fetchPost = async () => {
    const response = await fetch(`${POST_BY_ID}/${postId}`);
    const data = await response.json();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>user id: {JSON.stringify(post, null, 2)}</p>
    </div>
  );
};
