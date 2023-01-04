import { combineReducers } from "redux";
import { loaderReducer } from "./loader";
const RootReducer = combineReducers({
    loader: loaderReducer
});
export default RootReducer;