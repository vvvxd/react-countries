const initialState = {
  activeTheme: true,
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVE_THEME':
      return {
        activeTheme: !action.payload,
      };
    default:
      return state;
  }
};

export default header;
