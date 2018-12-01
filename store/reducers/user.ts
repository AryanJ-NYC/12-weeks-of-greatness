import { User } from 'firebase';
import { handleActions } from 'redux-actions';
import { setUser } from '../actions/user';

export interface IUserState {
  user: User | {};
}
const initialState: IUserState = { user: {} };

const reducer = handleActions({
  [setUser]: (state, action) => ({ ...state, user: action.payload || {} }),
}, initialState);

export default reducer;
