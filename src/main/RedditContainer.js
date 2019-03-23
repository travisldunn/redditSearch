import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import PostContainer from "../components/PostContainer";
import { toast } from "react-toastify";

class RedditContainer extends Component {
  state = {
    searchUrl: "https://www.reddit.com/r/funny.json?limit=25",
    posts: []
  };

  componentDidMount() {
    this.fetchPosts(this.state.searchUrl);
    this.interval = setInterval(this.fetchPosts(this.state.searchUrl), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
        toast.error("oops that that subreddit does not exist yet!");
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
