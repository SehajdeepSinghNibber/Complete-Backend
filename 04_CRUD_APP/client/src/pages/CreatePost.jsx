import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {

  const [image,setImage]=useState(null)
  const [caption,setCaption]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Image", image);
    formData.append("Title", caption);

    await axios.post("http://localhost:8000/create-post", formData);

    alert("Post Created");

    setImage(null)
    setCaption("")
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="file"
          accept="image/*"
          onChange={(e)=>setImage(e.target.files[0])}
          required
        />

        <input
          type="text"
          placeholder="Enter Caption"
          value={caption}
          onChange={(e)=>setCaption(e.target.value)}
          required
        />

        <button type="submit">Submit</button>

      </form>
    </section>
  );
};

export default CreatePost;