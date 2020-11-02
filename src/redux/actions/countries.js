import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setCountry = (items) => ({
  type: 'SET_COUNTRIES',
  payload: items,
});

export const setInputValue = (text) => ({
  type: 'SET_INPUT_VALUE',
  payload: text,
});

export const fetchCounties = (sortBy, inputValue) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://restcountries.eu/rest/v2/${sortBy === 'all' && inputValue === '' ? 'all' : ``}${
        sortBy !== 'all' && inputValue === '' ? `region/${sortBy}` : ''
      }${inputValue !== '' ? `name/${inputValue}` : ''}`,
    )
    .then(({ data }) => {
      dispatch(setCountry(data));
    });
};
