import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./portfolio.css";
// 1. 数据结构
const portfolioData = [
  {
    id: "web7",
    title: "Classical Snake Game",
    img: "/folio/web7.png",
    maskTitle: "Design Works",
    desc: [
      "Bring you to the childhood",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://yuqisui.bitbucket.io/Snake">Play</a></span>
    ]
  },
  {
    id: "web8",
    title: "McDonald's Track Portal",
    img: "/folio/web8.png",
    maskTitle: "Design Works",
    desc: [
      "Web Design: HTML, CSS",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://madtrackportal.azurewebsites.net/">Link</a></span>
    ]
  },
  {
    id: "web9",
    title: "LBL Charity",
    img: "/folio/web9.png",
    maskTitle: "Design Works",
    desc: [
      "Official website of LBL Charity",
      "Made by Wordpress.",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://lblcharitablefoundation.org/">Address</a></span>
    ]
  }
];

// 2. Modal
function PortfolioModal({ item, onClose }) {
  if (!item) return null;
  return ReactDOM.createPortal(
    <>
      {/* overlay */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      {/* modal */}
      <div className="modal" tabIndex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{item.maskTitle}</h4>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={item.img} className="img-responsive" alt="modal-image" />
            </div>
            <div className="modal-footer">
              <div className="mf-content">
                <ul>
                  {item.desc.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );

}

// 3. 主组件
const Portfolio = () => {
  const [modalItem, setModalItem] = useState(null);

  return (
    <li id="portfolio" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out rotated">
          <span className="invert">Portfolio Of</span> Yuqi Sui
        </h2>
      </div>
      <div className="description">
        <div className="portfolio-grid" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {portfolioData.map(item => (
            <div
              key={item.id}
              className="view view-first photography"
              style={{ width: "32.5%", height: "150px", position: "relative", cursor: "pointer" }}
            >
              <img
                src={process.env.PUBLIC_URL + item.img}
                alt={item.title}
                style={{ backgroundSize: "contain", margin: "0 auto", width: "100%", height: "100%" }}
              />
              <div className="mask" style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                background: "rgba(12,19,27,0.6)", opacity: 0, transition: "opacity 0.4s"
              }}>
                <h2 style={{ color: "#fff", marginTop: "30px" }}>{item.maskTitle}</h2>
                <a
                  role="button"
                  className="info"
                  style={{ display: "inline-block", marginTop: "10px", background: "#000", color: "#fff", padding: "7px 14px" }}
                  onClick={() => setModalItem(item)}
                >
                  Read More
                </a>
              </div>
              {/* mask hover效果 */}
              <style>
                {`
                  .view:hover .mask { opacity: 1 !important; }
                  .view .mask { opacity: 0; }
                `}
              </style>
            </div>
          ))}
        </div>
        {modalItem && <PortfolioModal item={modalItem} onClose={() => setModalItem(null)} />}
      </div>
    </li>
  );
};

export default Portfolio;