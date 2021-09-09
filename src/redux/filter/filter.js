/* eslint-disable */
const FILTER_COUNTRY = 'redux/filter/FILTER_COUNTRY';

const initialState = {
  value: 'all',
  data: [],
  filtered: [],
};

const filtering = (data, value) => {
  if (value === 'all') {
    return data;
  } else if (value === '0') {
    return data.filter((d) => d[1].today_new_confirmed >= 0 && d[1].today_new_confirmed <= 100);
  } else if (value === '101') {
    return data.filter((d) => d[1].today_new_confirmed >= 101 && d[1].today_new_confirmed <= 500);
  } else if (value === '501') {
    return data.filter((d) => d[1].today_new_confirmed >= 501 && d[1].today_new_confirmed <= 1000);
  } else {
    return data.filter((d) => d[1].today_new_confirmed >= 1001);
  }
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COUNTRY:
      return {
        value: action.payload.value,
        data: action.payload.data,
        filtered: filtering(action.payload.data, action.payload.value),
      };
    default:
      return state;
  }
};

export const filterCountries = (payload) => ({
  type: FILTER_COUNTRY,
  payload,
});

export default countryReducer;
