const initialState = {
  items: [],
  isLoaded: false,
  inputValue: '',
};

const countries = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        items: [...action.payload],
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default countries;
