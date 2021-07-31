import React, { useState, useEffect } from "react";
import "./FooterCopyright.css";

function FooterCopyright() {
  const currentDate = new Date().getFullYear();

  return (
    <div className="footer-copyright">
      <p>Copyright ©{currentDate} All rights reserved | www.grocery.com</p>
      <img src="./images/footer-payment.png" alt="" />
    </div>
  );
}

export default FooterCopyright;
