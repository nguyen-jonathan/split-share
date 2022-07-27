// reducer to store new group name
const newGroup = (state = [], action) => {
  switch (action.type) {
    case 'POST_GROUP':
      return action.payload;
    default:
      return state;
  }
};

export default newGroup;
