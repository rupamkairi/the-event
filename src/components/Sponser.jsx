import React from "react";

export default function Sponser() {
  return (
    <section id="supporters" className="section-with-bg">
      <div
        className="container"
        // data-aos="fade-up"
      >
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>

        <div
          className="row no-gutters supporters-wrap clearfix"
          // data-aos="zoom-in"
          // data-aos-delay="100"
        >
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img
                src="assets/img/sponsors/campus drone.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img
                src="assets/img/sponsors/kera.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img
                src="assets/img/supporters/3.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img
                src="assets/img/supporters/4.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
