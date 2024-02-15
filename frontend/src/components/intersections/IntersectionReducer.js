import { GET_INTERSECTIONS, ADD_INTERSECTION, UPDATE_INTERSECTION, DELETE_INTERSECTION } from "./IntersectionTypes";

const initialState = {
  intersections: []
};

export const intersectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERSECTIONS:
      return {
        ...state,
        intersections: action.payload
      };
    case ADD_INTERSECTION:
      return {
        ...state,
        intersections: [...state.intersections, action.payload]
      };
    case DELETE_INTERSECTION:
      return {
        ...state,
        intersections: state.intersections.filter((item, index) => item.id !== action.payload)
      };
    case UPDATE_INTERSECTION:
      const updatedIntersections = state.intersections.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        intersections: updatedIntersections
      };
    default:
      return state;
  }
};
