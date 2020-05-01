import { ADD_ITEM } from "../../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      state = [...state, ...action.payload];
      return state;

    default:
      return state;
  }
}
