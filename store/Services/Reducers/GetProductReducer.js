import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
} from "../constants";

const initialState = {
  processing: false,
  isError: false,
};

export const GetProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        processing: true,
        isError: false,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        processing: false,
        isError: false,
        data: action.response.data,
      };
    case GET_PRODUCT_ERROR:
      return {
        processing: false,
        isError: true,
        data: action.response.data,
      };
    default:
      return state;
  }
};
