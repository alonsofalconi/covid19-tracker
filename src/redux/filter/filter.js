const FILTER_COUNTRY = 'redux/filter/FILTER_COUNTRY';

const initialState = 'All';

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export const filterCountries = (payload) => ({
  type: FILTER_COUNTRY,
  payload,
});

export default countryReducer;
