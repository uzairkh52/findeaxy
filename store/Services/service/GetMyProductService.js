import { GET_MY_PRODUCT } from "../api";
import Http from "../Http";
export const GetMyProductService = {
  getMyProduct,
};
function getMyProduct(params) {
  console.log("bbb");
  return Http.get(GET_MY_PRODUCT, params)
    .then((res) => {
      const data = res.data;
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
