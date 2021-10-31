import {
  SubscribeToChannel,
  GetWorkspaceUsers,
  GetWorkspaceUser,
  GetUserInfo
} from "@zuri/control";

export function getUserInfo() {
  return async function (dispatch) {
    try {
      const info = await GetUserInfo();
      return dispatch({
        type: "USER_INFO_FULFILLED",
        payload: info
      });
    } catch (err) {
      return dispatch({
        type: "USER_INFO_FAILED",
        payload: err.message
      });
    }
  };
}

export function getWorkspaceUsers() {
  return async function (dispatch) {
    try {
      const users = await GetWorkspaceUsers();
      return dispatch({
        type: "WORKSPACE_USERS_FULFILLED",
        payload: users
      });
    } catch (err) {
      return dispatch({
        type: "WORKSPACE_USERS_FAILED",
        payload: err.message
      });
    }
  };
}

export function getWorkspaceUser(email) {
  return async function (dispatch) {
    try {
      const user = await GetWorkspaceUser(email);
      return dispatch({
        type: "WORKSPACE_USER_FULFILLED",
        payload: user
      });
    } catch (err) {
      return dispatch({
        type: "WORKSPACE_USER_FAILED",
        payload: err.message
      });
    }
  };
}

export function setLoading() {
  return {
    type: "WORKSPACE_INFO_LOADING"
  };
}
