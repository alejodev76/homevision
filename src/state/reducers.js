import { combineReducers } from "redux";
import propertiesReducer from "./properties/reducer";

export default combineReducers({
	properties: propertiesReducer,
});