import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const initializeStore = (initialState = {}) =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
