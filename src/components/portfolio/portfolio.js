import React from "react";

const Portfolio = () => {
  return (
    <li id="portfolio" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out">Portfolio</h2>
      </div>
      <div className="description">
        <p>Portfolio content goes here...</p>
      </div>
    </li>
  );
};

export default Portfolio;