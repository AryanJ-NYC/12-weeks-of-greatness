import { combineReducers } from 'redux';
import twelveWeeks from './twelveWeeks';
import ui from './ui';

export default combineReducers({
  twelveWeeksStore: twelveWeeks,
  uiStore: ui,
});
