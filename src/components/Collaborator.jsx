import React from "react";

export default function Collaborator() {
  return (
    <>
      <section id="supporters" className="section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Collaborators</h2>
          </div>

          <div
            className="row no-gutters supporters-wrap clearfix"
            // data-aos="zoom-in"
            // data-aos-delay="100"
          >
            <div
              className="col-lg-6 col-md-4 col-xs-6"
              style={{
                height: "220px",
                width: "350px",
                marginLeft: "25%",
              }}
            >
              <div className="supporter-logo">
                <img
                  src="assets/img/sponsors/kpod.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-4 col-xs-6"
              style={{
                height: "220px",
                width: "350px",
                marginLeft: "25%",
              }}
            >
              <div className="supporter-logo">
                <img
                  src="assets/img/sponsors/kera.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div style={{ textAlign: "center" }}>
              <a className="join scrollto" href="contact.html">
                Collab with us
              </a>
              <a className="join scrollto" href="contact.html">
                Registration
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
