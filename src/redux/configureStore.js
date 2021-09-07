import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducer from './homepage/homepage';
import filterReducer from './details/details';

const rootReducer = combineReducers({
  covidData: dataReducer,
  filteredData: filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
