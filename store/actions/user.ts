import { User } from 'firebase';
import { Dispatch } from 'redux';
import { createActions } from 'redux-actions';
import rebase from '../../lib/firebase';

export const { setUser } = createActions({
  SET_USER: user => user,
});

export const getUser = () => (dispatch: Dispatch): Promise<User> => (
  new Promise(resolve => {
    rebase.initializedApp.auth().onAuthStateChanged((user: User) => {
      dispatch(setUser(user));
      resolve(user);
    });
  })
);
