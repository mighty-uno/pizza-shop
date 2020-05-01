import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, ...action.payload];

    case UPDATE_ITEM:
      state = state.filter((r) => r._id != action.payload._id);
      return [...state, action.payload];

    case DELETE_ITEM:
      state = state.filter((r) => r._id != action.payload._id);
      return [...state];

    default:
      return state;
  }
}
