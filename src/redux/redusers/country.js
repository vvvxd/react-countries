const initialState = {
  item: {},
  activeItem: '',
  isLoadeng: false,
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
        isLoadeng: true,
      };
    case 'SET_LOADING_COUNTRY':
      return {
        ...state,
        isLoadeng: action.payload,
      };
    default:
      return state;
  }
};

export default country;
