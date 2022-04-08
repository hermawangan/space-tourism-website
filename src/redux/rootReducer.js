import { combineReducers } from "redux";
import crewReducer from "./Crew/crewReducer";
import destinationReducer from "./Destination/destinationReducer";
import techReducer from "./Technology/technologyReducer";

const rootReducer = combineReducers({
  destination: destinationReducer,
  crew: crewReducer,
  technology: techReducer
});

export default rootReducer;
