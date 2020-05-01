import axios from "axios";
import { notification } from "antd";
import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  ADD_CHOICE,
  ADD_ITEM,
  DELETE_CATEGORY,
  DELETE_ITEM,
  DELETE_CHOICE,
  ADD_ITEM_CART,
  UPDATE_ITEM_CART,
} from "./types";

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
        payload: [payload.data],
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

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const payload = await axios.delete(`api/category/${id}`);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: DELETE_CATEGORY,
        payload: { _id: id },
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    const payload = await axios.delete(`api/item/${id}`);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: DELETE_ITEM,
        payload: { _id: id },
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteChoice = (id) => async (dispatch) => {
  try {
    const payload = await axios.delete(`api/choice/${id}`);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: DELETE_CHOICE,
        payload: { _id: id },
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const fetchItems = (req) => async (dispatch) => {
  try {
    const payload = await axios.get("api/item", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: ADD_ITEM,
        payload: payload.data,
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const addItem = (req) => async (dispatch) => {
  try {
    const payload = await axios.post("api/item", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: ADD_ITEM,
        payload: [payload.data],
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const fetchChoices = (req) => async (dispatch) => {
  try {
    const payload = await axios.get("api/choice", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: ADD_CHOICE,
        payload: payload.data,
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const addChoice = (req) => async (dispatch) => {
  try {
    const payload = await axios.post("api/choice", req);

    if (payload.data.error) {
      notification.error({
        message: "Error",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: ADD_CHOICE,
        payload: [payload.data],
      });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const addToCart = (req) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM_CART,
    payload: req,
  });

  return true;
};

export const updateToCart = (req) => async (dispatch) => {
  dispatch({
    type: UPDATE_ITEM_CART,
    payload: req,
  });

  return true;
};
