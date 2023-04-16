import {
  GET_USER_REQUEST,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from "../constants";

const initialState = {
  processing: false,
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        processing: true,
      };
    case GET_USER_SUCCESS:
      return {
        processing: false,
        data: action.response.data,
      };
    case GET_USER_ERROR:
      return {
        processing: false,
      };
    default:
      return state;
  }
};
