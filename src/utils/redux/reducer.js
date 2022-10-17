import { combineReducers } from 'redux';
import sidebarReducer from 'utils/redux/reducers/sidebar';
import searchReducer from 'utils/redux/reducers/search';

const reducer = combineReducers({
  sidebarReducer: sidebarReducer,
  searchReducer: searchReducer
});

export default reducer;
