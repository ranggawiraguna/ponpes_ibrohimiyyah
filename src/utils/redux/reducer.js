import { combineReducers } from 'redux';
import sidebarReducer from 'utils/redux/reducers/sidebar';
import searchReducer from 'utils/redux/reducers/search';
import accountReducer from './reducers/account';

const reducer = combineReducers({
  sidebarReducer: sidebarReducer,
  accountReducer: accountReducer,
  searchReducer: searchReducer,
});

export default reducer;
