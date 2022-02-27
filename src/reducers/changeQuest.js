const initialState = 0;
const changeTheQuestion = (state = initialState, action) => {
  switch (action.type) {
    case "changeQuestion":
      return action.payload;
    default:
      return state;
  }
};

export default changeTheQuestion;
