import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <h6>Copyright Protected @{year}</h6>
    </div>
  );
};

export default Footer;
