import { combineReducers } from "redux";
import { GetProductReducer } from "./Reducers/GetProductReducer";
import { GetMyProductReducer } from "./Reducers/GetMyProductReducer";
import { getUserReducer } from "./Reducers/getUserReducer";
// import { loginReducer } from "./redux/reducers/loginReducer";
// import { registerReducer } from "./redux/reducers/registerReducer";
// import { getUserReducer } from "./redux/reducers/getUserReducer";
// import { getCartReducer } from "./redux/reducers/getCartReducer";
// import { saveCartReducer } from "./redux/reducers/saveCartReducer";
// import { getAppReducer } from "./redux/reducers/getAppReducer";
// import { getCountriesReducer } from "./redux/reducers/getCountriesReducer";

// COMBINED REDUCERS
const reducers = {
  GetProductReducer: GetProductReducer,
  GetMyProductReducer: GetMyProductReducer,
  getUserReducer: getUserReducer,

  // registerReducer: registerReducer,
  // loginReducer: loginReducer,
  // getUserReducer: getUserReducer,
  // getCartReducer: getCartReducer,
  // saveCartReducer: saveCartReducer,
  // getAppReducer: getAppReducer,
  // getCountriesReducer: getCountriesReducer,
};

export default combineReducers(reducers);
