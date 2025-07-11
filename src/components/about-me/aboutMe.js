import React from "react";

const AboutMe = () => {
  return (
    <li id="home" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out">Welcome To <span className="invert">My Profile</span></h2>
      </div>
      <div className="description">
        <div className="fade-text">
          <div className="strong-text">Hello, I am <span>Yuqi</span></div>
          <div className="focus-text"><span>Web Developer & </span><span>Web Designer</span></div>
          <p className="large-paragraph">A frontend Developer with skills in web development and experience in graphic design, VUE, Angular, HTML, CSS, JavaScript, Node.js, WordPress, UI design, Laravel, Graphql.</p>
        </div>
      </div>
    </li>
  );
};

export default AboutMe;