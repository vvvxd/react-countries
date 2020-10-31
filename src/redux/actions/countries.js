import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setCountry = (items) => ({
  type: 'SET_COUNTRIES',
  payload: items,
});

export const fetchCountry = (sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`https://restcountries.eu/rest/v2/${sortBy === 'all' ? 'all' : `region/${sortBy}`}`)
    .then(({ data }) => {
      dispatch(setCountry(data));
    });
};
