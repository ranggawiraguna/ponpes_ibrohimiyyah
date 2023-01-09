import { combineReducers } from 'redux';
import sidebarReducer from 'utils/redux/reducers/sidebar';
import searchReducer from 'utils/redux/reducers/search';
import accountReducer from './reducers/account';
import landingReducer from './reducers/landing';

const reducer = combineReducers({
  sidebarReducer: sidebarReducer,
  accountReducer: accountReducer,
  searchReducer: searchReducer,
  landingReducer: landingReducer
});

export default reducer;
