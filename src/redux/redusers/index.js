import { combineReducers } from 'redux';

import countries from './countries';
import filters from './filters';
import country from './country';

export default combineReducers({
  countries,
  filters,
  country,
});
