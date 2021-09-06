import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducer from './covidData/covidData';

const rootReducer = combineReducers({
  covidData: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
