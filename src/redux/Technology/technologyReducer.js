import {
  FETCH_TECHNOLOGY_REQ,
  FETCH_TECHNOLOGY_SUCCESS,
  FETCH_TECHNOLOGY_FAIL,
} from "./technologyType";

const initialState = {
  loading: false,
  technology: [],
  errorMsg: "",
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TECHNOLOGY_REQ:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TECHNOLOGY_SUCCESS:
      return {
        ...state,
        loading: false,
        technology: action.payload,
        errorMsg: "",
      };

    case FETCH_TECHNOLOGY_FAIL:
      return {
        ...state,
        loading: false,
        technology: [],
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default techReducer;
