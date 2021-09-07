const FILTER_DATA = 'redux/details/FILTER_DATA';

const initialState = {};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export default filterReducer;
