import { combineReducers } from "@reduxjs/toolkit";
import fileReducer from "./fileReducer";
import workspaceReducer from "./workspaceReducer";
import folderReducer from "./folderReducer";

const rootReducer = combineReducers({
  fileReducer: fileReducer,
  workspaceReducer: workspaceReducer,
  folderReducer: folderReducer
});

export default rootReducer;
