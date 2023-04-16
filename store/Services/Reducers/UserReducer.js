import { GET_USER } from "../const";
const initialState = {
  userdata: [],
};

export default function UserReducer(state = initialState, action) {
  console.log("userreducer111", state);
  if (action.type === GET_USER) {
    return { ...state, userdata: action.payload };
  } else {
    console.log("userreducer2222");
    return state;
  }
}
