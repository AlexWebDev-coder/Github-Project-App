import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./features/projectSlice";

export const rootReducer = combineReducers({
  project: projectReducer,
});
