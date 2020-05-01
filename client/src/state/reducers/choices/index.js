import { ADD_CHOICE, UPDATE_CHOICE, DELETE_CHOICE } from "../../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_CHOICE:
      return [
        ...state,
        ...action.payload.filter((r) => !state.find((r1) => r1._id == r._id)),
      ];

    case UPDATE_CHOICE:
      state = state.filter((r) => r._id != action.payload._id);
      return [...state, action.payload];

    case DELETE_CHOICE:
      state = state.filter((r) => r._id != action.payload._id);
      return [...state];

    default:
      return state;
  }
}
