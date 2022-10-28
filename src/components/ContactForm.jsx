import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="section-bg"
      style={{
        backgroundColor: "#E8E8E8",
      }}
    >
      <div
        className="container"
        // data-aos="fade-up"
      >
        <div className="section-header">
          <h2>Register here..</h2>
          <p>Give Suggetion to us to Enhance your Experience</p>
        </div>

        <div className="form">
          <hr />
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="number"
                  className="form-control"
                  name="mobile"
                  id="mobile"
                  placeholder="Phone +91"
                  required
                  pattern="[1-9]{1}[0-9]{9}"
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="How did you know about us..?"
                required
              ></textarea>
            </div>
            <br />
            <center>
              <div>
                <input type="checkbox" name="notRobot" id="notRobot" required />
                <label htmlFor="notRobot" style={{ color: "black" }}>
                  &emsp;
                  <b>I am not a robot</b>
                </label>
              </div>
            </center>

            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <br />
      <div className="row contact-info" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="col-md-4">
          <div className="contact-address">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <address>A108 Adam Street, NY 535022, USA</address>
          </div>
        </div>

        <div className="col-md-4">
          <div className="contact-phone">
            <i className="bi bi-phone"></i>
            <h3>Phone Number</h3>
            <p>
              <a href="tel:+155895548855">+1 5589 55488 55</a>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="contact-email">
            <i className="bi bi-envelope"></i>
            <h3>Email</h3>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
