import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {phoneReducer} from "./phoneReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(phoneReducer, composeWithDevTools(applyMiddleware(thunk)))