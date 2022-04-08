import axios from "axios";
import {
  FETCH_CREW_REQ,
  FETCH_CREW_FAIL,
  FETCH_CREW_SUCCESS,
} from "./crewType";

const fetchCrewReq = () => {
  return {
    type: FETCH_CREW_REQ,
  };
};

const fetchCrewSuccess = (crew) => {
  return {
    type: FETCH_CREW_SUCCESS,
    payload: crew,
  };
};

const fetchCrewFail = (error) => {
  return {
    type: FETCH_CREW_FAIL,
    payload: error,
  };
};

export const fetchCrew = () => {
  return (dispatch) => {
    dispatch(fetchCrewReq);
    axios
      .get("./data.json")
      .then((response) => {
        const crew = response.data.crew;

        dispatch(fetchCrewSuccess(crew));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCrewFail(errorMsg));
      });
  };
};
