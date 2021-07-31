import React from "react";
import FooterInfo from "./FooterComponent/FooterInfo";
import FooterLinks from "./FooterComponent/FooterLinks";
import FooterSignup from "./FooterComponent/FooterSignup";
import FooterCopyright from "./FooterComponent/FooterCopyright";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <FooterInfo />
          <FooterLinks />
          <FooterSignup />
        </div>
        <div className="row">
          <FooterCopyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
