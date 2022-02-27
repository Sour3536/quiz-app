const initialState = 0;
const setNum = (state = initialState, action) => {
  switch (action.type) {
    case "getNum":
      state = state + 1;
      return state;
    default:
      return state;
  }
};

export default setNum;
