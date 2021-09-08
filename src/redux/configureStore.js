import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducer from './homepage/homepage';
import filterReducer from './details/details';
import countryReducer from './filter/filter';

const rootReducer = combineReducers({
  covidData: dataReducer,
  filteredData: filterReducer,
  countries: countryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
