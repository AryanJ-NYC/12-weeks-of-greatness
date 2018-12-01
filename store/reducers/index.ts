import { combineReducers } from 'redux';
import twelveWeeks from './twelveWeeks';
import user from './user';

export default combineReducers({
  twelveWeeksStore: twelveWeeks,
  userStore: user,
});
