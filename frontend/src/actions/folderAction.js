import axios from "axios";

export function fetchFolders() {
  return async function (dispatch) {
    try {
      // setLoading();
      const res = await axios.get("/folders/all");
      console.log(res.data);
      return dispatch({
        type: "FETCH_FOLDERS_FULFILLED",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "FETCH_FOLDERS_REJECTED",
        payload: err.message,
      });
    }
  };
}

export function setLoading() {
  return {
    type:
      "FETCH_FOLDERS_PENDING" ||
      "ADD_FOLDER_PENDING" ||
      "DELETE_FOLDER_PENDING" ||
      "UPDATE_FOLDER_PENDING",
  };
}

export const folderDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/folders/read/${id}`)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
} 