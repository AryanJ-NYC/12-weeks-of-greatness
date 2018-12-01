import { handleActions } from 'redux-actions';
import { setTwelveWeeks } from '../actions/twelveWeeks';

export interface ITwelveWeeks {
  startDate: Date;
  goals: IGoal[];
}

export interface IGoal {
  name: string;
  tactics: ITactic[];
}

export interface ITactic {
  name: string;
}

interface ITwelveWeeksReducer {
  twelveWeeks: ITwelveWeeks[]
}

const initialState: ITwelveWeeksReducer = { twelveWeeks: [] };

const reducer = handleActions({
  [setTwelveWeeks]: (state, action) => ({ ...state, twelveWeeks: action.payload }),
}, initialState);

export default reducer;
