import { FETCH_USER } from '../actions/types';

// const initialState = {
//   user: null,
//   loading: true,
//   isAuthenticated: null
// };

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
};
