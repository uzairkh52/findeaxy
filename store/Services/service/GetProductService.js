import { GET_PRODUCT } from "../api";
import Http from "../Http";
export const getProductService = {
  getProduct,
};
function getProduct(params) {
  console.log("params");
  return Http.get(GET_PRODUCT, params)
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
