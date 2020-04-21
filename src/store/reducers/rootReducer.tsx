import arrayReducer from "./arrayReducer";
import sortMethodReducer from "./sortMethodReducer";
import { combineReducers } from "redux";

export default combineReducers({
    array: arrayReducer,
    sort: sortMethodReducer,
});
