import { Dispatch } from 'redux';
import { createActions } from 'redux-actions';
import rebase from '../../lib/firebase';
import { getUser } from './user';

export const { setTwelveWeeks } = createActions({
  SET_TWELVE_WEEKS: twelveWeeks => twelveWeeks,
});

export const getTwelveWeeks = () => async (dispatch: Dispatch, getState) => {
  const user = await dispatch(getUser());
  const { uid } = user;
  const twelveWeeks = await rebase.get(`users/${uid}/12weeks`, {});
  dispatch(setTwelveWeeks(twelveWeeks));
};
