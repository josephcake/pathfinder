import React from "react";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footer__item"}>Joseph Cake</div>
      <div className={"footer__item"}>
        <a
          className={"link-tag linkedin"}
          href={"https://www.linkedin.com/in/jocake"}
        >
          Linkedin
        </a>
      </div>
      <div className={"footer__item"}>
        <a
          className={"link-tag github"}
          href={"https://www.github.com/josephcake"}
        >
          Github
        </a>
      </div>
    </div>
  );
};
export default Footer;
