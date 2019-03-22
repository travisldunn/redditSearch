import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import PostContainer from "../components/PostContainer";

class RedditContainer extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="home">
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default RedditContainer;
