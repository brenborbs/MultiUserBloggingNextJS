import React from "react";
// import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>lifeinph</p>
      <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
      <ul>
        <li>
          <a href="/" style={{ color: "#382a1f" }}>
            <i className="fa fa-twitter-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="/" style={{ color: "#382a1f" }}>
            <i className="fa fa-facebook-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="/" style={{ color: "#382a1f" }}>
            <i className="fa fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
