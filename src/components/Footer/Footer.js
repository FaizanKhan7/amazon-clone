import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src={require("../../Assets/amazon_logo.png")}
        alt="amazon_logo"
      />
      <p>Conditions of Use</p>
      <p>Privacy Notice</p>
      <p>Interest-based Ads</p>
      <p> &#169; 2020 - present, Amazon-clone.com, Inc. or its affliates </p>
    </div>
  );
}

export default Footer;
