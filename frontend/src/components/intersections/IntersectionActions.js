import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_INTERSECTIONS, ADD_INTERSECTION, UPDATE_INTERSECTION, DELETE_INTERSECTION } from "./IntersectionTypes";

export const getIntersections = () => dispatch => {
  axios
    .get("/api/v1/intersections/")
    .then(response => {
      dispatch({
        type: GET_INTERSECTIONS,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addIntersection = intersection => dispatch => {
  axios
    .post("/api/v1/intersections/", intersection)
    .then(response => {
      dispatch({
        type: ADD_INTERSECTION,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const deleteIntersection = id => dispatch => {
  axios
    .delete(`/api/v1/intersections/${id}/`)
    .then(response => {
      dispatch({
        type: DELETE_INTERSECTION,
        payload: id
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const updateIntersection = (id, intersection) => dispatch => {
  axios
    .patch(`/api/v1/intersections/${id}/`, intersection)
    .then(response => {
      dispatch({
        type: UPDATE_INTERSECTION,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};
