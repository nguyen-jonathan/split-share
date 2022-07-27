const group = (state = [], action) => {
  switch (action.type) {
    case 'SET_GROUP':
      return action.payload;
    default:
      return state;
  }
};
export default group;
