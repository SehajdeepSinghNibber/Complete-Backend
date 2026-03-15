import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>PostApp</h3>
          <p>
            A simple social feed app where users can create posts,
            upload images, and explore content shared by others.
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feed">Feed</Link></li>
            <li><Link to="/create-post">Create Post</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Project Info</h3>
          <p>Built using React, Node.js, Express, and MongoDB.</p>
          <p>Image uploads powered by ImageKit.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>2026 made by Sehajdeep Singh</p>
      </div>

    </footer>
  );
};

export default Footer;