import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDestination } from "../redux";

function Destination({ destination, errorMsg, fetchDestination }) {
  useEffect(() => {
    fetchDestination();
    console.log(destination);
  }, []);

  return <div>Destination</div>;
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
