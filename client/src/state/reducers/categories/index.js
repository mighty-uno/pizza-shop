import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, ...action.payload];

    case UPDATE_CATEGORY:
      state = state.filter((r) => r._id != action.payload._id);
      return [...state, action.payload];

    case DELETE_CATEGORY:
      state = state.filter((r) => r._id != action.payload._id);
      return [...state];

    default:
      return state;
  }
}
