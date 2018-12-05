import { createActions } from 'redux-actions';

export const { setIsLoading } = createActions({
  SET_IS_LOADING: isLoading => isLoading,
});
