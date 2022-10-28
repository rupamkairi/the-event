import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        marginTop: "20px",
      }}
    >
      <div
        className="container"
        // data-aos="fade-up"
      >
        <div className="row">
          <div
            className="col-lg-6"
            id="ld-1"
            style={{
              boxShadow: "2px 2px 5px",
              borderRadius: "3px",
            }}
          >
            <h2>About Us</h2>
            <br />
            <p>
              Cultural events are events designed for entertainment and
              enjoyment of a more or less wide audience. They are events of some
              importance related to some branch of art, culture or values. These
              events are usually carried out by corporations or cultural groups.
              However, within the cultural events sector we can also find
              companies specialized in promotional marketing.There are different
              types and events that can be classified as cultural events and
              that are very present nowadays. Such as: Inaugurations of cultural
              centres, Exhibitions of artistic works, Cultural festivals, Street
              shows, Artistic courses.
            </p>
          </div>

          <div
            className="col-lg-6"
            id="ld-1"
            style={{
              boxShadow: "2px 2px 5px",
              borderRadius: "3px",
            }}
          >
            <h2>Theme</h2>
            <br />
            <p>
              India’s intangible cultural heritage flows from her 5000 year old
              culture and civilisation. Dr. A.L. Basham, in his authoritative
              "Cultural History of India”, has noted that "While there are four
              main cradles of civilisation which, moving from East to West, are
              China, India, the Fertile Crescent and the Mediterranean,
              specially Greece and Italy, India deserves a larger share of
              credit because she has deeply affected the cultural life of most
              of Asia. She has also extended her influence, directly and
              indirectly, to other parts of the World.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
