import { combineReducers } from "redux";
import cart from "./cart";
import categories from "./categories";

export default combineReducers({
  cart,
  categories,
});
