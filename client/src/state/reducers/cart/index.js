import { ADD_ITEM_CART, UPDATE_ITEM_CART } from "../../actions/types";

export default function (state = [], action) {
  let item = action.payload;
  let sCopy = [...state];
  let fIndex = -1;
  switch (action.type) {
    case ADD_ITEM_CART:
      fIndex = sCopy.findIndex((r) => r._id == item._id);
      if (fIndex > -1) {
        sCopy[fIndex]["qty"]++;
      } else {
        item.qty = 1;
        sCopy = [...state, item];
      }
      state = sCopy;
      return state;
    case UPDATE_ITEM_CART:
      fIndex = sCopy.findIndex((r) => r._id == item._id);

      if (fIndex > -1 && sCopy[fIndex]["qty"] == 1) {
        sCopy[fIndex]["qty"]--;
        sCopy.splice(fIndex, 1);
      } else if (fIndex > -1 && sCopy[fIndex]["qty"] > 0) {
        sCopy[fIndex]["qty"]--;
      }
      state = sCopy;
      return state;
    default:
      return state;
  }
}
