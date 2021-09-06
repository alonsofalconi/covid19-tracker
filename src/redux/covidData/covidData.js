import narrativaAPI from '../../api/narrativa';

const GET_DATA = 'covidTracker/covidData/GET_DATA';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
