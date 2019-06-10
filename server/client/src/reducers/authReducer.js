import { FETCH_USER } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
