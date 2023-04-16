import { GET_USER } from "../api";
import Http from "@/store/Services/Http";
export const getUserService = {
  getUser,
};

function getUser(params) {
  return Http.get(GET_USER, params)
    .then((response) => {
      const data = response.data;
      return {
        data,
        params: params,
      };
    })
    .catch((error) => {
      const response = error.response;
      return { error: response };
    });
}
