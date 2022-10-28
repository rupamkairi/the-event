import React from "react";
import states from "../statesData.json";

export default function StatesCulturalHeritage() {
  return (
    <>
      <div className="statehead">
        <h1>
          <span> STATES AND CULTURAL HERITAGE</span>
        </h1>
      </div>

      {/* <pre>{JSON.stringify(states, null, 2)}</pre> */}

      {states.map((el, key) => (
        <div className={el.stateInfoClassName} key={key}>
          <div className={el.classNameWrapper2}>
            <div className={el.classNameWrapper1}>
              <h2>{el.name}</h2>
              <hr />
              <p>
                {el.info}
                <br />
                <br />
                {el.festivals}
                <br />
                <br />
                {el.bestTimeToVisit}
              </p>
            </div>
            <div className={el.classNameWrapper1}>
              <img src={el.image} alt={el.imageAlt} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
