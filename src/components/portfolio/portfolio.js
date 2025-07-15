import React, { useState } from "react";
import "./portfolio.css";

// Button filter data
const filters = [
  { label: "Graphic Designs", filter: "*", key: "graphic" },
  { label: "Website Projects", filter: ".photography", key: "web" },
  { label: "Download My Resume", filter: ".commercial", key: "resume" },
];

// Portfolio items data (add all your items here)
const portfolioItems = [
  {
    id: "1",
    img: "images/folio/4.jpg",
    alt: "4",
    title: "Design Work",
    modal: "#myModa4",
    type: "graphic",
    style: { left: "0px", top: "0px" },
    viewClass: "view view-first",
  },
  // ...add all other items, with type: "graphic", "web", or "resume"
  // Example for a website project:
  {
    id: "web1",
    img: "images/folio/web1.PNG",
    alt: "web1",
    title: "Website Work",
    modal: "#myModalweb1",
    type: "web",
    style: { left: "0px", top: "0px" },
    viewClass: "view view-first photography",
  },
  // Example for resume:
  {
    id: "my-resume",
    img: "images/folio/resume.jpg",
    alt: "resume",
    title: "Know Me More",
    modal: "",
    type: "resume",
    style: { left: "0px", top: "0px" },
    viewClass: "view view-second commercial",
    download: true,
    downloadLink: "resume.pdf",
  },
  // ...add all other items
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("graphic");

  // Filter items based on activeFilter
  const filteredItems =
    activeFilter === "graphic"
      ? portfolioItems.filter((item) => item.type === "graphic")
      : activeFilter === "web"
      ? portfolioItems.filter((item) => item.type === "web")
      : portfolioItems.filter((item) => item.type === "resume");

  return (
    <div id="portfolio" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out">
          Portfolio <span className="invert">Works</span>
        </h2>
      </div>
      <div className="sec-porfolio description">
        <div className="abs-child">
          <ul className="button-group filters-button-group">
            {filters.map((btn) => (
              <li
                key={btn.key}
                className={`button${activeFilter === btn.key ? " is-checked" : ""}`}
                onClick={() => setActiveFilter(btn.key)}
              >
                {btn.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <div className="folio-container">
            <ul className="folio-item" style={{ position: "relative" }}>
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  className={item.viewClass}
                  style={item.style}
                  id={item.id}
                >
                  <img src={item.img} alt={item.alt} />
                  <div className="mask">
                    <h2>{item.title}</h2>
                    {item.download ? (
                      <a
                        role="button"
                        className="info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.downloadLink}
                      >
                        Download
                      </a>
                    ) : (
                      <a
                        role="button"
                        className="info"
                        data-toggle="modal"
                        data-target={item.modal}
                      >
                        Read More
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;