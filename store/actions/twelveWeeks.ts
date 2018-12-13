import { Dispatch } from 'redux';
import { createActions } from 'redux-actions';
import rebase from '../../lib/firebase';
import { setIsLoading } from './ui';

export const { setTwelveWeeks } = createActions({
  SET_TWELVE_WEEKS: twelveWeeks => twelveWeeks,
});

export const getTwelveWeeks = () => (dispatch: Dispatch) => {
  rebase.initializedApp.auth().onAuthStateChanged(async (user: User) => {
    if (user) {
      dispatch(setIsLoading(true));
      const { uid } = user;
      try {
        const twelveWeeks = await rebase.get(`users/${uid}/12weeks`, {});
        dispatch(setTwelveWeeks(twelveWeeks));
      } finally {
        dispatch(setIsLoading(false));
      }
    }
  });
};
