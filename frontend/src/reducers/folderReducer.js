const folderInititalState = {
  loading: true,
  error: null,
  folders: {},
}

export default function folderReducer(state = folderInititalState, action) {
  switch (action.type) {
    case 'FETCH_FOLDERS_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_FOLDERS_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        folders: action.payload,
      }
    case 'FETCH_FOLDERS_REJECTED':
      return {
        ...state,
        loading: false,
        folders: {},
        error: action.payload,
      }
    case 'ADD_FOLDER_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ADD_FOLDER_FULFILLED':
      return {
        ...state,
        loading: false,
        folders: [...state.folders, action.payload],
      }
    case 'ADD_FOLDER_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'DELETE_FOLDER_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'DELETE_FOLDER_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        folders: state.folders.filter(folder => folder.id !== action.payload),
      }
    case 'DELETE_FOLDER_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'UPDATE_FOLDER_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'UPDATE_FOLDER_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        folders: state.folders.data.map(folder => {
          if (folder.id === action.payload.id) {
            return action.payload
          }
          return folder
        }),
      }
    case 'UPDATE_FOLDER_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}