const initialState = {
  item: {},
  activeItem: '',
};

const country = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_COUNTRY':
      return {
        ...state,
        activeItem: action.payload,
      };
    case 'SET_ACTIVE_COUNTRY_ITEM':
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default country;
