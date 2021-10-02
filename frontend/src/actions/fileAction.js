import axios from "axios";

export function fetchFiles() {
  return async function (dispatch) {
    try {
      // setLoading();
      const res = await axios.get("/files/all");
      console.log(res.data);
      return dispatch({
        type: "FETCH_FILES_FULFILLED",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "FETCH_FILES_REJECTED",
        payload: err.message,
      });
    }
  };
}

export function getTotalNumberOfFilesInFolder(folderId) {
  return async function (dispatch) {
    try {
      // setLoading();
      const res = await axios.get(`/files/id/${folderId}`);
      console.log(res.data);
      return dispatch({
        type: "GET_TOTAL_NUMBER_OF_FILES_IN_FOLDER_FULFILLED",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "GET_TOTAL_NUMBER_OF_FILES_IN_FOLDER_REJECTED",
        payload: err.message,
      });
    }
  };
}

export function setLoading() {
  return {
    type:
      "FETCH_FILES_PENDING" ||
      "ADD_FILE_PENDING" ||
      "DELETE_FILE_PENDING" ||
      "UPDATE_FILE_PENDING",
  };
}
