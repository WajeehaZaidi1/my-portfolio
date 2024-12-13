import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
