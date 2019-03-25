import React from "react";

const Post = ({ post }) => {
  let time = new Date(post.created_utc * 1000).toLocaleTimeString();

  return (
    <div className="post">
      <h4>
        Posted by u/{post.author} at {time}
      </h4>
      <h1>
        <a
          href={
            post.is_video ? `https://www.reddit.com${post.permalink}` : post.url
          }
        >
          {post.title}
        </a>
      </h1>

      <h4>
        <a href={`https://www.reddit.com${post.permalink}`}>
          {post.num_comments} Comments
        </a>
      </h4>
    </div>
  );
};

export default Post;
