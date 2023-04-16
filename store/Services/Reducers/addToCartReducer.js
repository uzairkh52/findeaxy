import { ADD_TO_CART } from "../const";
const initialState = {
  cartData: [],
};
// current state
export default function addToCartReducer(state = initialState, action) {
  // console.log("add to cart reducer:", state);
  if (action.type) {
    ADD_TO_CART;
    console.log("add to cart reducer", state);
    return { ...state, cartData: action.payload };
  } else {
    return state;
  }
  // switch (action.type) {
  //   case ADD_TO_CART:
  //     return { ...state, cartData: action.payload };
  //   // updated state
  //   default:
  //     return state;
  // }
}
