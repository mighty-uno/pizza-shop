import axios from "axios";
import { notification } from "antd";
import { ADD_CATEGORY, UPDATE_CATEGORY } from "./types";

export const fetchCategories = (req) => async (dispatch) => {
  try {
    const payload = await axios.get("api/category", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: ADD_CATEGORY,
        payload: payload.data,
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const addCategory = (req) => async (dispatch) => {
  try {
    const payload = await axios.post("api/category", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: ADD_CATEGORY,
        payload: payload.data,
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const updateCategory = (id, req) => async (dispatch) => {
  try {
    const payload = await axios.put("api/category/", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: payload.data,
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};
