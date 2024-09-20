import React from "react";
// import LocomotiveScroll from "locomotive-scroll";

import {Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home/home";
import Projects from "./components/Pages/Projects";
import Articles from "./components/Pages/Articles";
import Books from "./components/Pages/Books";
import Preowned from "./components/Pages/Preowned";
import NewsFeed from "./components/Pages/NewsFeed";
import Gototop from "./components/Gototop";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="app">
      <Gototop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/books" element={<Books />} />
        <Route path="/preowned" element={<Preowned />} />
        <Route path="/jobs" element={<Preowned />} />
        <Route path="/newsfeeds" element={<NewsFeed />} />
      </Routes>
    </div>
  );
}

export default App;
