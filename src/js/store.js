import { createStore } from 'redux';

import emails from './data/data';

import rootReducer from './reducers/index';

const initialState = {
  emails
};

const store = createStore(rootReducer, initialState);

export default store;