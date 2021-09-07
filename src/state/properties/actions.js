import axios from "axios";
import {
  GET_PROPERTY_LIST_START,
  GET_PROPERTY_LIST_END,
  GET_PROPERTY_LIST_ERROR,
} from "./constants";

export const getProperties = (dispatch, params) => {
  const { page = 1, perPage = 20 } = params;

  dispatch({ type: GET_PROPERTY_LIST_START });

  axios
    .get(
      `${process.env.REACT_APP_API_ENDPOINT}/api_project/houses?page=${page}&per_page=${perPage}`
    )
    .then((response) => {
      dispatch({ type: GET_PROPERTY_LIST_END, payload: response.data.houses });
    })
    .catch((e) => {
      dispatch({ type: GET_PROPERTY_LIST_ERROR, payload: e.response });
    });
};
