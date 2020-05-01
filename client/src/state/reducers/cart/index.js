import { ADD_ITEM_CART, UPDATE_ITEM_CART } from "../../actions/types";

const add = (state, item) => {
  let fIndex = state.findIndex((r) => r._id == item._id);
  if (fIndex > -1) {
    state[fIndex]["qty"]++;
  } else {
    item.qty = 1;
    state.push(item);
  }

  return state;
};

const subtract = (state, item) => {
  let fIndex = state.findIndex((r) => r._id == item._id);

  if (fIndex > -1 && state[fIndex]["qty"] == 1) {
    state[fIndex]["qty"]--;
    state.splice(fIndex, 1);
  } else if (fIndex > -1 && state[fIndex]["qty"] > 0) {
    state[fIndex]["qty"]--;
  }

  return state;
};

export default function (state = [], action) {
  switch (action.type) {
    case ADD_ITEM_CART:
      state = add(state, action.payload);

      return state;
    case UPDATE_ITEM_CART:
      return subtract(state, action.payload);
    default:
      return state;
  }
}
