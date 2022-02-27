const len = 30;
const initialState = [];
for (let i = 0; i < len; i++) {
  initialState[i] = "#989898";
}
const setCol = (state = initialState, action) => {
  switch (action.type) {
    case "setColour":
      state[action.payload] = "green";
      return [...state];
    default:
      return state;
  }
};

export default setCol;
