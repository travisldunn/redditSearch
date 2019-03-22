import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import PostContainer from "../components/PostContainer";

class RedditContainer extends Component {
  state = {
    searchUrl: "https://www.reddit.com/r/funny.json?limit=25",
    posts: []
  };

  componentDidMount() {
    this.fetchPosts(this.state.searchUrl);
  }

  componentWillUnmount() {}

  handleSearch = query => {
    console.log(query);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submiting");
  };

  fetchPosts(url) {
    fetch(url, {})
      .then(resp => resp.json())
      .then(data => console.log(data.data.children))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="home">
        <SearchBar onChange={this.handleSearch} onSubmit={this.handleSubmit} />
        <PostContainer />
      </div>
    );
  }
}

export default RedditContainer;
