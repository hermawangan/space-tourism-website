import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTechnology } from "../redux";

function Tehcnology({ technology, fetchTechnology }) {
  const [techName, setTechName] = useState("Launch vehicle");

  useEffect(() => {
    fetchTechnology();
  }, []);

  const clickHandler = (e) => {
    setTechName(e.target.id);
  };

  return (
    <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop text-white">
      <div>
        <span>03</span>
        <h2>SPACE LAUNCH 101</h2>
      </div>

      <div>
        <button id="Launch vehicle" onClick={clickHandler}>
          1
        </button>
        <button id="Spaceport" onClick={clickHandler}>
          2
        </button>
        <button id="Space capsule" onClick={clickHandler}>
          3
        </button>
      </div>

      <div>
        <p>THE TERMINOLOGY</p>
        {technology.map((tech) => {
          return tech.name === techName ? (
            <div key={tech.name}>
              <h2>{tech.name}</h2>
              <p>{tech.description}</p>
            </div>
          ) : null;
        })}
      </div>

      <div>
        {technology.map((tech) => {
          return tech.name === techName ? (
            <img src={tech.images.portrait} key={tech.name} alt="technology" />
          ) : null;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    technology: state.technology.technology,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTechnology: () => dispatch(fetchTechnology()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tehcnology);
