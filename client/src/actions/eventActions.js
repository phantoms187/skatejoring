import axios from "axios";
import {
  GET_ERRORS,
} from "./types";

export const addEvent = (eventData, history) => dispatch => {
  axios
    .post("/events/add", eventData)
    .then(res => history.push("/events")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};