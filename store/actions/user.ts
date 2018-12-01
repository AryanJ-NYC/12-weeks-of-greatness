import { User } from 'firebase';
import { Dispatch } from 'redux';
import { createActions } from 'redux-actions';
import rebase from '../../lib/firebase';

export const { setUser } = createActions({
  SET_USER: user => user,
});

export const getUser = () => async (dispatch: Dispatch) => {
  rebase.initializedApp.auth().onAuthStateChanged((user: User) => {
    dispatch(setUser(user));
    Promise.resolve(user);
  });
};
