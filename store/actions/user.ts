import { createActions } from 'redux-actions';
import firebase from '../../lib/firebase';

export const { setUser } = createActions({
  SET_USER: (user) => user,
});

export const login = (email: string, password: string) => async dispatch => {
  const user = await firebase.auth().signInWithEmailAndPassword(email, password);
  dispatch(setUser(user));
};

export const signup = (email: string, password: string) => async dispatch => {
  const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  dispatch(setUser(user));
};
