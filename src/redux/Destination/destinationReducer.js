import {
  FETCH_DESTINATION_FAIL,
  FETCH_DESTINATION_REQ,
  FETCH_DESTINATION_SUCCESS,
} from "./destinationType";

const initialState = {
  loading: false,
  destination: [],
  errorMsg: "",
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESTINATION_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DESTINATION_SUCCESS:
      return {
        ...state,
        loading: false,
        destination: action.payload,
        errorMsg: "",
      };

    case FETCH_DESTINATION_FAIL:
      return {
        ...state,
        loading: false,
        destination: [],
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default destinationReducer;
