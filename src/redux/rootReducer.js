import { combineReducers } from "redux";
import destinationReducer from "./Destination/destinationReducer";

const rootReducer = combineReducers({
  destination: destinationReducer,
});

export default rootReducer;
