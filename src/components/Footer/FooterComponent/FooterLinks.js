import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./FooterLinks.css";

function FooterLinks() {
  return (
    <Router>
      <div className="footer-links-col">
        <h6>Useful Links</h6>
        <ul className="footer-link-1">
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <Link to="#">About our Shop</Link>
          </li>
          <li>
            <Link to="#">Secure Shopping</Link>
          </li>
          <li>
            <Link to="#">Delivery Information</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#">Our Sitemap</Link>
          </li>
        </ul>
        <ul className="footer-link-2">
          <li>
            <Link to="#">Who We Are</Link>
          </li>
          <li>
            <Link to="#">Our Services</Link>
          </li>
          <li>
            <Link to="#">Projects</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Innvation</Link>
          </li>
          <li>
            <Link to="#">Testemonials</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default FooterLinks;
