import { handleActions } from 'redux-actions';
import { setIsLoading } from '../actions/ui';

export interface IUIState {
  isLoading: boolean;
}
const initialState: IUIState = { isLoading: false };

const reducer = handleActions({
  [setIsLoading]: (state, action) => ({ ...state, isLoading: action.payload }),
}, initialState);

export default reducer;
