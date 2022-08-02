// reducer to store expense
const edit = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_TRANSACTION':
      return action.payload;
    default:
      return state;
  }
};

export default edit;
