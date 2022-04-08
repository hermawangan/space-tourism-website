import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCrew } from "../redux";

function Crew({ crew, fetchCrew }) {
  const [name, setName] = useState("Douglas Hurley");

  useEffect(() => {
    fetchCrew();
  }, []);

  const clickHandler = (e) => {
    setName(e.target.id);
  };

  return (
    <div>
      <div>
        <span>02</span>
        <h2>MEET YOUR CREW</h2>
      </div>

      <div>
        {crew.map((crews) => {
          return crews.name === name ? (
            <div key={crews.name}>
              <h3>{crews.role}</h3>
              <h2>{crews.name}</h2>
              <p>{crews.bio}</p>
            </div>
          ) : null;
        })}
      </div>

      <div>
        {crew.map((crews) => {
          return crews.name === name ? (
            <img src={crews.images.png} key={crews.name} alt="crew" />
          ) : null;
        })}
      </div>

      <div>
        <ul>
          <li
            id="Douglas Hurley"
            onClick={clickHandler}
            className={`${
              name === "Douglas Hurley" ? "border-2 border-solid" : null
            } rounded-full h-2 w-2 bg-black `}
          ></li>
          <li
            id="Mark Shuttleworth"
            onClick={clickHandler}
            className={`${
              name === "Mark Shuttleworth" ? "border-2 border-solid" : null
            } rounded-full h-2 w-2 bg-black `}
          ></li>
          <li
            id="Victor Glover"
            onClick={clickHandler}
            className={`${
              name === "Victor Glover" ? "border-2 border-solid" : null
            } rounded-full h-2 w-2 bg-black `}
          ></li>
          <li
            id="Anousheh Ansari"
            onClick={clickHandler}
            className={`${
              name === "Anousheh Ansari" ? "border-2 border-solid" : null
            } rounded-full h-2 w-2 bg-black `}
          ></li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    crew: state.crew.crew,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrew: () => dispatch(fetchCrew()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crew);
