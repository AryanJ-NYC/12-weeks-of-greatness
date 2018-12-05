import { Dispatch } from 'redux';
import { createActions } from 'redux-actions';
import rebase from '../../lib/firebase';
import { setIsLoading } from './ui';

export const { setTwelveWeeks } = createActions({
  SET_TWELVE_WEEKS: twelveWeeks => twelveWeeks,
});

export const getTwelveWeeks = () => (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  rebase.initializedApp.auth().onAuthStateChanged(async (user: User) => {
    if (user) {
      const { uid } = user;
      const twelveWeeks = await rebase.get(`users/${uid}/12weeks`, {});
      dispatch(setTwelveWeeks(twelveWeeks));
      dispatch(setIsLoading(false));
    } else {
      dispatch(setIsLoading(false));
    }
  });
};
