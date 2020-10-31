const initianState = {
  sortBy: 'all',
};

const filters = (state = initianState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
