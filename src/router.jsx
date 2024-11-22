import React from "react";
import { Route, Routes } from "react-router-dom";
import { Post, User, Home, Album } from "./pages";

export const Router = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/post/:postID" element={<Post />} />
        <Route path="/albums/:albumId" element={<Album />} />
      </Routes>
    </div>
  );
};
