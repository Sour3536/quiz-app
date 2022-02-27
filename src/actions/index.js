export const changeNumber = (num) => {
  return {
    type: "changeQuestion",
    payload: num,
  };
};
export const setAnswer = (ans, ques) => {
  return {
    type: "setAnswer",
    payload: ques,
    set: ans,
  };
};
export const setColour = (ques) => {
  return {
    type: "setColour",
    payload: ques,
  };
};
export const getNum = () => {
  return {
    type: "getNum",
  };
};
