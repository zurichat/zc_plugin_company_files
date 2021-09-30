const initialState = {
  loading: true,
  error: null,
  users: {},
  user: {},
  info: {},
};

export default function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case "WORKSPACE_USERS_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };
    case "WORKSPACE_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case "USER_INFO_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        info: action.payload,
      };
    case "WORKSPACE_INFO_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "WORKSPACE_USERS_FAILED":
    case "WORKSPACE_USER_FAILED":
    case "USER_INFO_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
