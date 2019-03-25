import React from "react";
import Post from "../Post.js";
import { configure, shallow } from "enzyme";
import { expect } from "chai";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<Post />", () => {
  const post = {
    title: "title",
    url: "url",
    permalink: "/r/url",
    author: "author",
    is_video: false,
    comments: 25
  };

  const postWrapper = shallow(<Post post={post} />);
  it("renders without crashing", () => {
    postWrapper;
  });
  it("title to be displayed", () => {
    expect(postWrapper.text()).to.contain(post.title);
  });
  it("link to site to be displayed", () => {
    expect(postWrapper.html()).to.contain(`<a href="${post.url}">`);
  });
  it("link to comments to be displayed", () => {
    expect(postWrapper.html()).to.contain(
      `<a href="https://www.reddit.com${post.permalink}">`
    );
  });
  it("author's name to be displayed", () => {
    expect(postWrapper.text()).to.contain(post.author);
  });
});
