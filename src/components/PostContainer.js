import React, { Component } from "react";
import Post from "./Post.js";

const PostContainer = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post, idx) => {
      return <Post post={post.data} key={idx} />;
    });
  };

  return <div className="postContainer">{renderPosts()}</div>;
};

export default PostContainer;
