import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { streamReducer } from "./streamReducer";

export const rootReducer = combineReducers({ uiReducer, streamReducer });
