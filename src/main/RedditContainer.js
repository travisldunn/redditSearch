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
    let searchUrl = `https://www.reddit.com/r/${query}.json?limit=25`;
    this.setState({ searchUrl });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchPosts(this.state.searchUrl);
  };

  fetchPosts(url) {
    fetch(url, {})
      .then(resp => resp.json())
      .then(data => this.setState({ posts: data.data.children }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="home">
        <SearchBar onChange={this.handleSearch} onSubmit={this.handleSubmit} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default RedditContainer;
