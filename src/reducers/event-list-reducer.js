export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      const { name, counter, id } = action;
      return Object.assign({}, state, {
        [id]: {
          name: name,
          counter: counter,
          id: id
        }
      });
    case 'DELETE_EVENT':
      const newState = { ...state };
      delete newState[id];
      return newState;
    /*case 'INCREMENT_EVENT':
      const { counterDelta, id } = action;
      return Object.assign({}, state, {
        [id]: {

        }
      });*/
    default:
      return state;
  }
};
