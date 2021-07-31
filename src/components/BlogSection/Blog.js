import React from "react";
import BlogItem from "./blogComponent/BlogItem";
import "./Blog.css";
import blogPost from "./blogComponent/BlogInfo";

function Blog() {
  return (
    <div className="blog-section">
      <div className="container blog-container">
        <h1 className="blog-header">From The Blog</h1>
        <div className="blog-row">
          {blogPost.map((post, index) => {
            return (
              <BlogItem
                key={index}
                imgUrl={post.imgUrl}
                title={post.title}
                description={post.description}
                date={post.date}
                comment={post.comments}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
