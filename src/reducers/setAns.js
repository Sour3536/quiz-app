const len = 30;
const initialState = [];
for (let i = 0; i < len; i++) {
  initialState[i] = null;
}
const setAns = (state = initialState, action) => {
  switch (action.type) {
    case "setAnswer":
      state[action.payload] = action.set;
      return state;
    default:
      return state;
  }
};

export default setAns;
