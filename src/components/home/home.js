import React, { useState } from "react";
import AboutMe from "../about-me/aboutMe";
import Resume from "../resume/resume";
import Portfolio from "../portfolio/portfolio";
import "./home.css";

const Home = () => {
  const [activePage, setActivePage] = useState("home"); 

  const handleMenuClick = (page) => {
    setActivePage(page); // 更新当前显示的页面
  };

  return (
    <div className="container">
      <div id="content" className="row">
        <div className="col-sm-4">
          {/* Namecard */}
          <div id="namecard" className="namecard">
            <div className="shadow-img"></div>
            <h1 className="maintitle">Yuqi <span className="invert"></span></h1>
            <h3 className="invert sub-maintitle">Web/UI <span className="rotate">Developer, Designer</span></h3>
            <img id="profile-img" className="profile-img transparent" src={process.env.PUBLIC_URL + "/myPhoto.png"} alt="profile-image" />
          </div>
          {/* Menu */}
          <div id="menu-container">
            <ul className="nav-menu no-padding">
              <li className={`nav-btn ${activePage === "home" ? "selected" : ""}`} onClick={() => handleMenuClick("home")}>
                <div className="hover-background"></div>
                <span>About Me</span><i className="fa fa-user fa-fw"></i>
              </li>
              <li className={`nav-btn ${activePage === "resume" ? "selected" : ""}`} onClick={() => handleMenuClick("resume")}>
                <div className="hover-background"></div>
                <span>Resume</span><i className="fa fa-file-text fa-fw"></i>
              </li>
              <li className={`nav-btn ${activePage === "portfolio" ? "selected" : ""}`} onClick={() => handleMenuClick("portfolio")}>
                <div className="hover-background"></div>
                <span>Portfolio</span><i className="fa fa-suitcase fa-fw"></i>
              </li>
            </ul>
            <div className="social-menu-container">
              <ul className="social-menu no-padding">
                <li><a target="_blank" href="https://github.com/sy7777"><i className="fa fa-github"></i></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/yuqisui"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-8 page-segment">
          <ul className="page-container no-padding">
            {activePage === "home" && <AboutMe />}
            {activePage === "resume" && <Resume />}
            {activePage === "portfolio" && <Portfolio />}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;