import {
  REGISTER_REQUEST,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../constants";

const initialState = {
  processing: false,
  error: false,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        processing: true,
        error: false,
      };
    case REGISTER_SUCCESS:
      return {
        processing: false,
        data: action.response.data,
        error: false,
      };
    case REGISTER_ERROR:
      return {
        processing: false,
        data: action,
        error: true,
      };
    default:
      return state;
  }
};
