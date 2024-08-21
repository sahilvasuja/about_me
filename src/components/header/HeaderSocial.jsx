// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">


      <a href="https://www.linkedin.com/in/sahilvasuja-b73401210/"  target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sahilvasuja"  target="_blank">
        <BsGithub />
      </a>
      {/* <a href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a> */}
    </div>
  );
};

export default HeaderSocial;