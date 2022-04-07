import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setPost(res.data));
  }, []);

  return (
    <div>
      <h1>Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul>
    </div>
  );
}
