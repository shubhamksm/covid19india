import React from "react";

import profile from "../profileAvatar.svg";

const Footer = () => {
  return (
    <footer>
      <div className="left-info">
        <div className="profile">
          <img src={profile} alt="profile" height="40px" />
        </div>
        <div className="text_">
          <p>Created By</p>
          <span>
            <p>Shubham Khandelwal</p>
          </span>
        </div>
      </div>
      <div className="right-info">
        <a href="https://github.com/shubhamksm/covid19india">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/shubham.khandelwal.1276">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/shubham_ksm/?hl=en">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
