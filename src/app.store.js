import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { mathReducer } from './reducers/math.reducer';
import { userReducer } from './reducers/user.reducer';

// an example middleware
// const loLogger = (store) => (next) => (action) => {
//   console.log("Action fired:", action);
//   next(action);
// }

export const store = createStore(
  combineReducers({userReducer, mathReducer}),
  applyMiddleware(logger)
);