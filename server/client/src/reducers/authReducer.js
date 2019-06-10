const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    default:
      return state;
  }
};
