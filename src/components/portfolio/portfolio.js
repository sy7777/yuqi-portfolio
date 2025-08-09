import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./portfolio.css";
// 1. data
const portfolioData = [
  {
    id: "web1",
    title: "A basic website for PY students to run their star-up company.",
    img: "/folio/web1.png",
    maskTitle: "Website Works",
    desc: [
      "Basic Front-End development",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://yuqisui.bitbucket.io/alladin/">Demo</a></span>
    ]
  },
  {
    id: "web2",
    title: "Your personal bookkeeper, record all your transcation details.",
    img: "/folio/web2.png",
    maskTitle: "Website Works",
    desc: [
      "An Angular web mobile app project, all the data were stored in firebase.",
      "Angular, typescript, Javascript.",
      "Feel free to register your own account and enjoy.",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://sy7777.github.io/CountMoney/#/register">Demo</a></span>
    ]
  },
  {
    id: "web3",
    title: "A display page of Github for all ITers who can search information by users and repository.",
    img: "/folio/web3.png",
    maskTitle: "Website Works",
    desc: [
      "Angular framework",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://github.com/sy7777/angular_searchGit">Demo</a></span>
    ]
  },
  {
    id: "web4",
    title: "Commercial Website for small business.",
    img: "/folio/web4.png",
    maskTitle: "Website Works",
    desc: [
      "Wordpress website",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://www.tiptoedancewear.com.au/">Demo</a></span>
    ]
  },
  {
    id: "web5",
    title: "A low code platform for those people without tech knowlege, they can create the form as they like.",
    img: "/folio/web5.png",
    maskTitle: "Website Works",
    desc: [
      "Build Soil Data Broker Program website to collect data for WA government using Vue, JavaScript, TypeScript, HTML, CSS, Laravel, Azure DevOps and serverless function.",
      "Build online Form Creator (Kind of like a low code development platform) using Vue, Bootstrap, Vuex, Cloudflare, CI/CD Graphql, TypeOrm.",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://resources.axisstream.co">Demo</a></span>
    ]
  },
    {
    id: "web6",
    title: "Your personal to do list, record all your tasks.",
    img: "/folio/web6.png",
    maskTitle: "Website Works",
    desc: [
      "JavaScript, all the data were stored in Localstorage.",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://yuqisui.bitbucket.io/todolist">Demo</a></span>
    ]
  },
  {
    id: "web7",
    title: "Classical Snake Game",
    img: "/folio/web7.png",
    maskTitle: "Website Works",
    desc: [
      "Bring you to the childhood",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://yuqisui.bitbucket.io/Snake">Play</a></span>
    ]
  },
  {
    id: "web8",
    title: "McDonald's Track Portal",
    img: "/folio/web8.png",
    maskTitle: "Website Works",
    desc: [
      "Web Design: HTML, CSS",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://madtrackportal.azurewebsites.net/">Link</a></span>
    ]
  },
  {
    id: "web9",
    title: "LBL Charity",
    img: "/folio/web9.png",
    maskTitle: "Website Works",
    desc: [
      "Official website of LBL Charity",
      "Made by Wordpress.",
      <span key="link">Link: <a target="_blank" rel="noopener noreferrer" href="https://lblcharitablefoundation.org/">Address</a></span>
    ]
  }
];

// 2. Modal
function PortfolioModal({ item, onClose }) {
  if (!item) {
    console.log(item, "item is null");
    return null
  };
  return ReactDOM.createPortal(
    <>
      {/* overlay */}
      <div className="modal-backdrop fade show" onClick={onClose}>ggggggggg</div>

      {/* modal */}
      <div className="modal" tabIndex="-1" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{item.maskTitle}</h4>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={process.env.PUBLIC_URL + item.img} className="img-responsive" alt="modal-image" />
            </div>
            <div className="modal-footer">
              <div className="mf-content">
                <ul>
                  {item.title}
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
        <div className="portfolio-grid" style={{}}>
          {portfolioData.map(item => (
            <div
              key={item.id}
              className="view view-first photography"
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