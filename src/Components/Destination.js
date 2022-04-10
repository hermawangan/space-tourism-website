import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDestination } from "../redux";

function Destination({ destination, errorMsg, fetchDestination }) {
  const [planetMoon, setPlanetMoon] = useState("Moon");

  useEffect(() => {
    fetchDestination();
  }, []);

  const clickHandler = (e) => {
    setPlanetMoon(e.target.id);
  };

  return (
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop text-white">
      <span>01</span>
      <h2> PICK YOUR DESTINATION </h2>
      <div>
        <div>
          {destination.map((moon) =>
            moon.name === planetMoon ? (
              <img key={moon.distance} src={moon.images.png} alt="planet" />
            ) : null
          )}
        </div>
        <div>
          <ul>
            <li
              id="Moon"
              onClick={clickHandler}
              className={`${
                planetMoon === "Moon" ? "border-2 border-b-solid" : null
              }`}
            >
              Moon
            </li>
            <li
              id="Mars"
              onClick={clickHandler}
              className={`${
                planetMoon === "Mars" ? "border-2 border-b-solid" : null
              }`}
            >
              Mars
            </li>
            <li
              id="Europa"
              onClick={clickHandler}
              className={`${
                planetMoon === "Europa" ? "border-2 border-b-solid" : null
              }`}
            >
              Europa
            </li>
            <li
              id="Titan"
              onClick={clickHandler}
              className={`${
                planetMoon === "Titan" ? "border-2 border-b-solid" : null
              }`}
            >
              Titan
            </li>
          </ul>
          {destination.map((moon) => {
            return moon.name === planetMoon ? (
              <div key={moon.distance}>
                <h1>{moon.name}</h1>
                <p>{moon.description}</p>
                <div>
                  <div>
                    <p>Avg. Distance</p>
                    <span>{moon.distance}</span>
                  </div>
                  <div>
                    <p>EST. TRAVEL TIME</p>
                    <span>{moon.travel}</span>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    destination: state.destination.destination,
    errorMsg: state.destination.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: () => dispatch(fetchDestination()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
