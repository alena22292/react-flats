import { SET_FLATS } from '../actions';

const flatsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case SET_FLATS:
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
