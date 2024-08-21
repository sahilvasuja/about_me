// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/passportsize_pic.jpg";
import HeaderSocial from "./HeaderSocial";
// import ME from "../../assets/Casual_pic.jpg";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sahil Vasuja</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} className alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;