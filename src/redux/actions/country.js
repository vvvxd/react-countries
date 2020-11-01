import axios from 'axios';

export const activeCountry = (payload) => ({
  type: 'SET_ACTIVE_COUNTRY',
  payload,
});
export const setActiveCountryItem = (payload) => ({
  type: 'SET_ACTIVE_COUNTRY_ITEM',
  payload,
});

export const fetchCountry = (country) => (dispatch) => {
  axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`).then(({ data }) => {
    dispatch(setActiveCountryItem(data));
  });
};
