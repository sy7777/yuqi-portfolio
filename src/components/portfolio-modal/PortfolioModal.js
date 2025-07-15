import React from "react";

const PortfolioModal = ({ item, onClose }) => (
  <div className="modal fade show" style={{display: "block"}} tabIndex="-1" role="dialog" aria-labelledby={`myModalLabel${item.id}`} aria-modal="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={onClose} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id={`myModalLabel${item.id}`}>{item.title}</h4>
        </div>
        <div className="modal-body">
          <img src={item.img} className="img-responsive" alt="modal-image" />
        </div>
        <div className="modal-footer">
          <div className="mf-content">
            <ul>
              {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioModal;