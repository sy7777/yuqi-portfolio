import React from "react";

const Menu = () => (
  <div id="menu-container">
    <ul className="nav-menu no-padding">
      <li className="nav-btn selected" title="Home" data-page="home">
        <div className="hover-background"></div>
        <span>About Me</span>
        <i className="fa fa-user fa-fw"></i>
      </li>
      <li className="nav-btn" id="resume-btn" title="Resume" data-page="resume">
        <div className="hover-background"></div>
        <span>Resume</span>
        <i className="fa fa-file-text fa-fw"></i>
      </li>
      <li className="nav-btn folio-btn" data-filter="*" title="Portfolio" data-page="portfolio">
        <div className="hover-background"></div>
        <span>Portfolio</span>
        <i className="fa fa-suitcase fa-fw"></i>
      </li>
      <li className="nav-btn" title="Contact" id="contact-link" data-page="contact">
        <div className="hover-background"></div>
        <span>Contact</span>
        <i className="fa fa-paper-plane fa-fw"></i>
      </li>
    </ul>
    <div className="social-menu-container">
      <ul className="social-menu no-padding">
        <li>
          <a target="_blank" href="https://github.com/sy7777">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/yuqisui">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;