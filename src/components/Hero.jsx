import React from "react";
import { useAppContext } from "../contexts/AppContext";

export default function Hero() {
  const { headerActive } = useAppContext();

  return (
    <>
      <section id="hero">
        <div
          className="hero-container aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className="mb-4 pb-0">
            <span>Cultural Fest</span>
          </h1>
          <p className="mb-4 pb-0">
            <span> ONE THAT YOU WILL REMEMBER A LIFETIME AND ACKNOWLEDGE</span>
          </p>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            className="glightbox play-btn mb-4"
          ></a>
          <a href="#about" className="about-btn scrollto">
            About The Event
          </a>
        </div>
        <div className={"sidebar " + (headerActive && "active")}>
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Theme
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#schedule">
                Events
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#ourteam">
                Our Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#supporters">
                Sponsors
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#supporters">
                Collaborators
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
