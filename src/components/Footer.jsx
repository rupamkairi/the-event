import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <div className="container">
              <div className="copyright">
                &copy; Copyright <strong>CULTURALFEST</strong>. All Rights
                Reserved
              </div>
              <div className="credits"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
