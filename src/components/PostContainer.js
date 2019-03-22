import React, { Component } from "react";

class PostContainer extends Component {
  getTime = post => {
    return new Date(post.data.created_utc * 1000).toLocaleTimeString();
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="postContainer">
        {posts.map(post => (
          <div key={post.data.title} className="post">
            <h4>
              Posted by u/{post.data.author} at {this.getTime(post)}
            </h4>
            <h1>
              <a
                href={
                  post.is_video
                    ? `https://www.reddit.com${post.data.permalink}`
                    : post.data.url
                }
              >
                {post.data.title}
              </a>
            </h1>

            <h4>
              <a href={`https://www.reddit.com${post.data.permalink}`}>
                {post.data.num_comments} Comments
              </a>
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
