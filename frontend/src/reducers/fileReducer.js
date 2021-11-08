/* eslint-disable no-underscore-dangle */
const fileInititalState = {
  loading: true,
  error: null,
  files: {
    status: "",
    data: []
  }
};

export default function fileReducer(state = fileInititalState, action) {
  switch (action.type) {
    case "FETCH_FILES_PENDING":
      return {
        ...state,
        loading: true
      };
    case "FETCH_FILES_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: action.payload
      };
    case "FETCH_FILES_REJECTED":
      return {
        ...state,
        loading: false,
        files: {},
        error: action.payload
      };
    case "ADD_FILE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "ADD_FILE_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: [...state.files, action.payload]
      };
    case "ADD_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "DELETE_FILE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "DELETE_FILE_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: {
          ...state.files,
          data: state.files.data.filter((file) => file._id !== action.payload)
        }
      };
    case "DELETE_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "STAR_FILE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "STAR_FILE_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: state.files.data.map((file) => {
          if (file.id === action.payload.id) {
            return action.payload;
          }
          return file;
        })
      };
    case "STAR_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "UPDATE_FILE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "UPDATE_FILE_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: state.files.map((file) => {
          if (file.id === action.payload.id) {
            return action.payload;
          }
          return file;
        })
      };
    case "UPDATE_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
