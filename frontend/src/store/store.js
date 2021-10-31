import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import rootReducer from "../reducers";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    rootReducer: rootReducer
  },
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
