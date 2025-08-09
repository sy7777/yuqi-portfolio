import React from "react";

const Contact = () => {
  return (
    <li id="contact" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out">Welcome To <span className="invert">Contact me</span></h2>
      </div>
      <div className="description">
        <div className="container-padding">
          <div className="row">
            <div className="col-sm-12">
              <div className="map-container">
                <div style={{ width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32192.59729781558!2d115.9006735320442!3d-31.99262474337774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1752650854619!5m2!1sen!2sau"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
                <br />
              </div>

              <div className="col-sm-5">
                <h3 className="title">Contact Info</h3>
                <h6 className="sm-title">
                  <span className="address-icon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  Perth
                </h6>
                <h6 className="sm-title">
                  <span className="address-icon">
                    <i className="fa fa-phone"></i>
                  </span>
                  +61 415 590 320
                </h6>
                <h6 className="sm-title">
                  <span className="address-icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                  yuqi.sui77@gmail.com
                </h6>
              </div>

              <div className="col-sm-7">
                <div className="mail-container">
                  <h3 className="title invert">Don't Forget To Mail Me</h3>
                  <div className="form-group">
                    <button type="button" className="btn btn-success">
                      <a href="mailto:yuqi.sui77@gmail.com" style={{ color: "white", textDecoration: "none" }}>
                        SEND
                      </a>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Contact;
