import {
  FETCH_TECHNOLOGY_REQ,
  FETCH_TECHNOLOGY_SUCCESS,
  FETCH_TECHNOLOGY_FAIL,
} from "./technologyType";
import axios from "axios";

const fetchTechReq = () => {
  return {
    type: FETCH_TECHNOLOGY_REQ,
  };
};

const fetchTechSuccess = (technology) => {
  return {
    type: FETCH_TECHNOLOGY_SUCCESS,
    payload: technology,
  };
};

const fetchTechFail = (error) => {
  return {
    type: FETCH_TECHNOLOGY_FAIL,
    payload: error,
  };
};

export const fetchTechnology = () => {
  return (dispatch) => {
    dispatch(fetchTechReq);
    axios
      .get("./data.json")
      .then((response) => {
        const tech = response.data.technology;
        dispatch(fetchTechSuccess(tech));
      })
      .catch((error) => {
        const errorMsg = error.msg;
        dispatch(fetchTechFail(errorMsg));
      });
  };
};
