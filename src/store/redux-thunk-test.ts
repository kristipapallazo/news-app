import { Dispatch } from "@reduxjs/toolkit";

// Asynchronous action creator
export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", error });
    }
  };
};
