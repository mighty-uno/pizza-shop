import { combineReducers } from "redux";
import cart from "./cart";
import categories from "./categories";
import items from "./items";
import choices from "./choices";

export default combineReducers({
  cart,
  categories,
  items,
  choices,
});
