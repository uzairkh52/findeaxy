import { STUDENT_DATA } from "../const";
const initialState = {
  studentData: [],
};
// current state
export default function StudentReducer(state = initialState, action) {
  if (action.type === STUDENT_DATA) {
    return { ...state, studentData: action.payload };
  } else {
    return state;
  }

  // switch (action.type) {
  //   case STUDENT_DATA:
  //     return { ...state, studentData: action.payload };
  //     break;
  //   default:
  //     return state;
  // }
}
