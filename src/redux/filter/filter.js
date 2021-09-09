const FILTER_COUNTRY = 'redux/filter/FILTER_COUNTRY';

const initialState = {
  value: 'all',
  data: [],
  filtered: [],
};

const filtering = (data, value) => {
  let result;
  if (value === 'all') {
    result = data;
  } else if (value === '0') {
    result = data.filter((d) => d[1].today_new_confirmed >= 0 && d[1].today_new_confirmed <= 100);
  } else if (value === '101') {
    result = data.filter((d) => d[1].today_new_confirmed >= 101 && d[1].today_new_confirmed <= 500);
  } else if (value === '501') {
    result = data
      .filter((d) => d[1].today_new_confirmed >= 501 && d[1].today_new_confirmed <= 1000);
  } else {
    result = data.filter((d) => d[1].today_new_confirmed >= 1001);
  }
  return result;
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
