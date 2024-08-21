// eslint-disable-next-line no-unused-vars
import React from "react";
import Resume from "../../assets/Sahil_Vasuja_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume{" "}
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;