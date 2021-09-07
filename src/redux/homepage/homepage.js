import narrativaAPI from '../../api/narrativa';

const GET_DATA = 'redux/homepage/GET_DATA';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.filter((country) => country[1].today_new_confirmed !== 0);
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

export default dataReducer;
