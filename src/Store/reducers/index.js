// src/store/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counter'; // Assuming you have a counter reducer in counter.js

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
