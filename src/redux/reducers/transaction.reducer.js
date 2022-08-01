// reducer to store expense
const transaction = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANSACTION':
      return action.payload;
    default:
      return state;
  }
};

export default transaction;
