import axios from 'axios';

export const setCountry = (items) => ({
  type: 'SET_COUNTRIES',
  payload: items,
});

export const fetchCountry = () => (dispatch) => {
  axios.get(`https://restcountries.eu/rest/v2/all`)
  .then(({ data }) => {
    dispatch(setCountry(data));
  });
};
