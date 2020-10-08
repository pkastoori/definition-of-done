import axios from "axios";

const URL = "http://localhost:8080";

export const addActivity = (activity) => {
  return (dispatch, getState) => {
    axios
      .post(URL + "/activities", {
        content: activity.content,
        status: activity.status,
      })
      .then((res) => dispatch({ type: "ADD", payload: res.data.response }))
      .catch((error) => console.log(error));
  };
};

export const deleteActivity = (id) => {
  return (dispatch, getState) => {
    axios
      .delete(URL + "/activity/" + id)
      .then(dispatch({ type: "DELETE", payload: id }))
      .catch((error) => console.log(error));
  };
};

export const markAsDone = (id) => {
  return (dispatch, getState) => {
    axios
      .put(URL + "/activity/" + id, {
        status: "completed",
      })
      .then(dispatch({ type: "DONE", payload: id }))
      .catch((error) => console.log(error));
  };
};

export const allDone = () => {
  return (dispatch, getState) => {
    axios
      .put(URL + "/activities")
      .then(dispatch({ type: "ALL_DONE" }))
      .catch((error) => console.log(error));
  };
};

export const getActivities = () => {
  return (dispatch, getState) => {
    axios
      .get(URL + "/activities")
      .then((res) => dispatch({ type: "GET", payload: res.data.response }))
      .catch((error) => console.log(error));
  };
};
