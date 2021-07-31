import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./BlogItem.css";

function BlogItem({ title, imgUrl, description, date, comment }) {
  return (
    <Router>
      <div className="blog-post">
        <div className="blog-image">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="blog-content">
          <ul className="blog-head">
            <li>
              <i className="far fa-calendar"></i>
              {date}
            </li>
            <li>
              <i className="far fa-comment"></i>
              {comment}
            </li>
          </ul>
          <h3>
            <Link to="#">{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </Router>
  );
}

export default BlogItem;
