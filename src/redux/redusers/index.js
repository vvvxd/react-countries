import { combineReducers } from 'redux';

import countries from './countries';
import filters from './filters';

export default combineReducers({
  countries,
  filters,
});
