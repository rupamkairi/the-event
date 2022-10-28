import React from "react";
import AboutUs from "./AboutUs";
import Collaborator from "./Collaborator";
import ContactForm from "./ContactForm";
import EventDetails from "./EventDetails";
import OurTeam from "./OurTeam";
import Sponser from "./Sponser";
import StatesCulturalHeritage from "./StatesCulturalHeritage";

export default function Main() {
  return (
    <main id="main">
      <AboutUs />
      <section id="schedule" className="section-with-bg">
        <div
          className="container aos-init aos-animate"
          // data-aos="fade-up"
        >
          <div className="section-header">
            <h2>Event Schedule</h2>
          </div>
          <div
            className="tab-content row justify-content-center"
            // data-aos="fade-up"
            // data-aos-delay="200"
          >
            <EventDetails />
            <br /> <br />
            <a href="#Documents" className="more_info">
              Click for more info
            </a>
            <br /> <br /> <br />
            <OurTeam />
            <StatesCulturalHeritage />
            <Sponser />
            <Collaborator />
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
