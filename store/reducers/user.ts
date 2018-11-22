import { handleActions } from 'redux-actions';
import { setUser } from '../actions/user';

const initialState = { user: null };

const reducer = handleActions({
  [setUser]: (state, action) => ({ ...state, user: action.payload || null }),
}, initialState);

export default reducer;
