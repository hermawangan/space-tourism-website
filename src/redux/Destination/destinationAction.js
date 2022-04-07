import axios from "axios";

import {
  FETCH_DESTINATION_FAIL,
  FETCH_DESTINATION_REQ,
  FETCH_DESTINATION_SUCCESS,
} from "./destinationType";

const destinationReq = () => {
  return {
    type: FETCH_DESTINATION_REQ,
  };
};

const destinationSuccess = (destination) => {
  return {
    type: FETCH_DESTINATION_SUCCESS,
    payload: destination,
  };
};

const destinationFail = (error) => {
  return {
    type: FETCH_DESTINATION_FAIL,
    payload: error,
  };
};

export const fetchDestination = () => {
  return (dispatch) => {
    dispatch(destinationReq);
    axios
      .get("./data.json")
      .then((response) => {
        const destination = response.data.destinations;
        dispatch(destinationSuccess(destination));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(destinationFail(errorMsg));
      });
  };
};
