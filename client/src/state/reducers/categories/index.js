import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        ...action.payload.filter((r) => !state.find((r1) => r1._id == r._id)),
      ];

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
