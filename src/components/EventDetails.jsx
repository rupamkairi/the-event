import React from "react";

export default function EventDetails() {
  return (
    <>
      <div
        role="tabpanel"
        className="col-lg-9 tab-pane fade show active"
        id="day-1"
      >
        <div className="row schedule-item">
          <div className="col-md-2">
            <time>EVENT</time>
          </div>
          <div className="col-md-10">
            <h4>SUB-EVENTS</h4>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Dance</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/4.jpg" alt="Brenden Legros" />
            </div>
            <h4>
              Narthana, Western, Folk, Step a Beat <span></span>
            </h4>
            <p>
              The performance will be judged based on Abhinayam/Bhavam - facial
              expressions, and eye contact.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Singing</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/2.jpg" alt="Hubert Hirthe" />
            </div>
            <h4>Wah! Sangeth, Folk Songs, Pick the Pitch, Cinematic </h4>
            <p>
              The performance will be judged based on VOCAL-Vocal Technique –
              Tone Quality, Breath Support, Intonation.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Music</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/3.jpg" alt="Cole Emmerich" />
            </div>
            <h4>Instrumental, Beat Box </h4>
            <p>
              {" "}
              Only individual participation is allowed. Percussion and
              non-percussion instruments are allowed.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Theatre Arts</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/6.jpg" alt="Jack Christiansen" />
            </div>
            <h4>Mime, Duologue-Trilogue, Standup Comedy, Act as Act </h4>
            <p>
              Participants may mimic sound of machines and speeches of
              well-known persons.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Media Contest</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/5.jpg" alt="Alejandrin Littel" />
            </div>
            <h4>Ad Making, Reel Making, Invisible Writer, Photography </h4>
            <p>
              The topics for the Ad Mad Show will be given on the spot. Each
              team will have 15 minutes for the preparation.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Bharath Sabha</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/4.jpg" alt="Willow Trantow" />
            </div>
            <h4>Vidhana Sabha, Rajya Sabha</h4>
            <p>
              A Sabha with structure similar to the ‘Mock Parliament’ Round two
              can take place for around 2 hours.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Kaalakruthi</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/1.jpg" alt="Willow Trantow" />
            </div>
            <h4>
              Handicrafts, Painting, Crazy Crafts, Doodling, Art of Clay,
              Impossible - Possible, Make a Collage, Embroidery{" "}
            </h4>
            <p>
              There will be a single round in this event and is conducted LIVE
              on the day of the main event.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Fashion Show</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/2.jpg" alt="Willow Trantow" />
            </div>
            <h4>
              Mr. Ethenic, Mrs. Ethenic, Mr. Fashion, Mrs. Fashion, Khadi
              Indian, Face Painting, Emphasize your Inspiration
            </h4>
            <p>
              classical male, classical female, modern/trendy male,
              modern/trendy female.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Quizes</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/3.jpg" alt="Willow Trantow" />
            </div>
            <h4>
              Heritage Quiz, Culture Quiz, Guess the Song, Guess the Movie,
              Riddles
            </h4>
            <p>
              All participants will be asked general questions about heritage
              and they will have to give suitable answers.
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Recepie Master</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/4.jpg" alt="Willow Trantow" />
            </div>
            <h4>Mastero</h4>
            <p>
              They need to record a video explaining every step in detail and
              need to share us through the link we provide{" "}
            </p>
          </div>
        </div>

        <div className="row schedule-item">
          <div className="col-md-2">
            <time>Literature</time>
          </div>
          <div className="col-md-10">
            <div className="speaker">
              <img src="assets/img/speakers/5.jpg" alt="Willow Trantow" />
            </div>
            <h4>
              Essay Writing, Articulatre, Elacution, Debate, Just a Minute{" "}
            </h4>
            <p>
              The competition will be held digitally through the ZOOM
              application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
