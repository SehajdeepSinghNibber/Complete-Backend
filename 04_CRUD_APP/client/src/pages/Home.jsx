import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      <div className="hero">
        <h1>Welcome to PostApp</h1>

        <p>
          Share your moments, explore posts from others, and build your own
          visual feed. Create posts, browse the feed, and enjoy a simple
          social experience.
        </p>

        <div className="home-buttons">
          <Link to="/create-post">
            <button>Create Post</button>
          </Link>

          <Link to="/feed">
            <button>View Feed</button>
          </Link>
        </div>
      </div>

      <div className="gallery">

        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          alt="unsplash"
        />

        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="unsplash"
        />

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="unsplash"
        />

      </div>

    </div>
  );
};

export default Home;