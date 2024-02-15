import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { intersectionsReducer } from "./components/intersections/IntersectionReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    intersections: intersectionsReducer
  });

export default createRootReducer;
