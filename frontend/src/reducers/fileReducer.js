const fileInititalState = {
  loading: true,
  error: null,
  files: {},
  fileNumber: 0,
};

export default function fileReducer(state = fileInititalState, action) {
  switch (action.type) {
    case "FETCH_FILES_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_FILES_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: action.payload,
      };
    case "FETCH_FILES_REJECTED":
      return {
        ...state,
        loading: false,
        files: {},
        error: action.payload,
      };
    case "GET_TOTAL_NUMBER_OF_FILES_IN_FOLDER_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        fileNumber: action.payload,
      };
    case "GET_TOTAL_NUMBER_OF_FILES_IN_FOLDER_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
        fileNumber: 0,
      };
    case "GET_TOTAL_NUMBER_OF_FILES_IN_FOLDER_PENDING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_FILE_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_FILE_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: [...state.files, action.payload],
      };
    case "ADD_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_FILE_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_FILE_FULFILLED":
      return {
        ...state,
        loading: false,
        error: null,
        files: state.files.filter((file) => file.id !== action.payload),
      };
    case "DELETE_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_FILE_PENDING":
      return {
        ...state,
        loading: true,
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
        }),
      };
    case "UPDATE_FILE_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
