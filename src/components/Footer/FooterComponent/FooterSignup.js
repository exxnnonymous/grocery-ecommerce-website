import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./FooterSignup.css";

function FooterSignup() {
  return (
    <Router>
      <div className="footer-signup-col">
        <h6>Join Our Newsletter Now</h6>
        <p>Get E-mail updates about our latest shop and special offers.</p>

        <form action="#" className="subscribe-newsletter">
          <input type="text" placeholder="Enter your mail" />
          <button className="subscribe-newsletter-btn">Subscribe</button>
        </form>

        <div className="footer-widget-social">
          <Link to="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default FooterSignup;
