import changeTheQuestion from "./changeQuest";
import setAns from "./setAns";
import setCol from "./setCol";
import setNum from "./setNum";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheQuestion,
  setAns,
  setCol,
  setNum,
});

export default rootReducer;
