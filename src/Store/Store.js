// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path as needed

const store = configureStore({
  reducer: rootReducer,
});

export default store;
