import { combineReducers } from 'redux';

import countries from './countries';
import filters from './filters';
import country from './country';
import header from './header';

export default combineReducers({
  countries,
  filters,
  country,
  header,
});
