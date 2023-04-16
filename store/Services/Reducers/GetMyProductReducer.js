import {
  GET_MY_PRODUCT_REQUEST,
  GET_MY_PRODUCT_ERROR,
  GET_MY_PRODUCT_SUCCESS,
} from "../constants";

const initialState = {
  processing: false,
  isError: false,
};

export const GetMyProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PRODUCT_REQUEST:
      return {
        processing: true,
        isError: false,
      };
    case GET_MY_PRODUCT_SUCCESS:
      return {
        processing: false,
        isError: false,
        data: action.response.data,
      };
    case GET_MY_PRODUCT_ERROR:
      return {
        processing: false,
        isError: true,
        data: action.response.data,
      };
    default:
      return state;
  }
};
