// reducer to store expense
const expense = (state = [], action) => {
  switch (action.type) {
    case 'SET_EXPENSE':
      return action.payload;
    default:
      return state;
  }
};

export default expense;
