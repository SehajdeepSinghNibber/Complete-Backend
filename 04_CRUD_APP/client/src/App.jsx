import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>

      <Footer />

    </Router>
  );
};

export default App;