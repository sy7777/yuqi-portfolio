import React from "react";

const AboutMe = () => {
  return (
    <li id="home" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out">Welcome To <span className="invert">My Profile</span></h2>
      </div>
      <div className="description  ">
        <div className="container-padding">
          <div className="fade-text">
            <div className="strong-text">Hello, I am <span>Yuqi</span></div>
            <div className="focus-text"><span>Web Developer & </span><span>Web Designer</span></div>
            <p className="large-paragraph">Frontend Developer with hands-on experience building scalable web platforms and custom CMS templates. Experienced in JavaScript, Angular, Vue, React, HTML, CSS, PHP, and Drupal. Passionate about improving user experience, building internal tools to support content teams, and collaborating cross-functionally across product and engineering.</p>
          </div>
          <h3 className="personal-info-title title">Personal Info</h3>
          <ul className="personal-info">
            <li className=""><label>Name:</label><span>Yuqi Sui</span></li>
            <li className=""><label>Address:</label><span>Perth (Happy to
              relocate)</span></li>
            <li className="">
              <label>Email:</label><span id="my-email">yuqi.sui77@gmail.com</span>
            </li>
            <li className=""><label>Phone:</label><span>+61 415 590 320</span></li>
          </ul>
        </div>

      </div>
    </li>
  );
};

export default AboutMe;