import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../constants";
import { getUserService } from "../service/getUserService";

export const getUserAction = (params) => {
  return (dispatch) => {
    dispatch(requestGetUser(params));
    getUserService
      .getUser(params)
      .then((response) => {
        dispatch(getUserSuccess(response));
      })
      .catch((error) => {
        dispatch(getUserError(error));
      });
  };

  function requestGetUser(params) {
    return { type: GET_USER_REQUEST, params };
  }

  function getUserSuccess(response) {
    return { type: GET_USER_SUCCESS, response };
  }

  function getUserError(response) {
    return { type: GET_USER_ERROR, response };
  }
};
