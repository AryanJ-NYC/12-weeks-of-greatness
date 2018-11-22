import { handleActions } from 'redux-actions';
import { setUser } from '../actions/user';

const initialState = { user: null };

const reducer = handleActions({
  [setUser]: (state, { payload: { user }}) => ({ ...state, ...user }),
}, initialState);

export default reducer;
