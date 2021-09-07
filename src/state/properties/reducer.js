import {
  GET_PROPERTY_LIST_START,
  GET_PROPERTY_LIST_END,
  GET_PROPERTY_LIST_ERROR,
} from "./constants";

const initialState = {
  propertyList: [],
  isLoading: false,
  error: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROPERTY_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PROPERTY_LIST_END:
      return {
        ...state,
        isLoading: false,
        propertyList: payload,
        error: null,
      };
    case GET_PROPERTY_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        propertyList: [],
      };
    default:
      return state;
  }
};

export default reducer;
