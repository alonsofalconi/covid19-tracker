import narrativaAPI from '../../api/narrativa';

const GET_DATA = 'covidTracker/covidData/GET_DATA';
const FILTER_DATA = 'covidTracker/covidData/FILTER_DATA';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.filter((country) => country[1].today_new_confirmed !== 0);
    case FILTER_DATA:
      return action.payload;
    default:
      return state;
  }
};

const getDataAction = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getData = () => (dispatch) => {
  narrativaAPI.getDataByDate().then((res) => {
    dispatch(getDataAction(Object.entries(res.dates[res.total.date].countries)));
  });
};

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export default dataReducer;
