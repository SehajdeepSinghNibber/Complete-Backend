import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      });
  }, []);

  const deletePost = async (id) => {

    await axios.delete(`http://localhost:8000/posts/${id}`);

    const updatedPosts = posts.filter((post) => post._id !== id);

    //OR

    // const updatedPosts = [...posts];
    // const index = updatedPosts.findIndex((post) => post._id === id);
    // updatedPosts.splice(index, 1);

    setPosts(updatedPosts);
  };

  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="card" key={post._id}>
          <img src={post.Post} alt="post" />
          <p className="caption">{post.Caption}</p>

          <button
            className="delete-btn"
            onClick={() => deletePost(post._id)}
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  );
};

export default Feed;