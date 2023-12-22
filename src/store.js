import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import colorModeReducer from "./reducer/colorModeReducer";

const reducer = combineReducers({ colorMode: colorModeReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
