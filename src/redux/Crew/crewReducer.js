import {
  FETCH_CREW_REQ,
  FETCH_CREW_FAIL,
  FETCH_CREW_SUCCESS,
} from "./crewType";

const initialState = {
  loading: false,
  crew: [],
  errorMsg: "",
};

const crewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREW_REQ:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CREW_SUCCESS:
      return {
        ...state,
        loading: false,
        crew: action.payload,
        errorMsg: "",
      };

    case FETCH_CREW_FAIL:
      return {
        ...state,
        loading: false,
        case: [],
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default crewReducer;
