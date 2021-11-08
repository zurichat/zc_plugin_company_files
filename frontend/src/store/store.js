import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { loadState, saveState } from "./localStorage";
import rootReducer from "../reducers";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    rootReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
