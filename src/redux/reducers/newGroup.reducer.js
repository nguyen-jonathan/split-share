// reducer to store new group name
const newGroup = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_GROUP':
      return action.payload;
    default:
      return state;
  }
};

export default newGroup;
