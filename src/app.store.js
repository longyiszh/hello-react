import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'

const userInitState = {
  name: "valorad",
  age: 0
}

const mathInitState = {
  number: 100,
  alterations: [],
  cunzaiganstr: "La la la"
};

const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state, // es6 展开，“继承”原来的object
        name: action.payload
      }
      break;

    case "SET_AGE":
      state = {
        ...state, // es6 展开，“继承”原来的object
        age: action.payload
      }
      break;

    default: 
      break;
  }
  return state;
};

const mathReducer = (state = mathInitState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state, // es6 展开，“继承”原来的object
        number: state.number + action.payload,
        alterations: [...state.alterations, action.payload]
      }
      break;
    case "SUBTRACT":
      state = {
        ...state, // es6 展开，“继承”原来的object
        number: state.number - action.payload,
        alterations: [...state.alterations, action.payload]
      }
      break;
    case "MULTIPLY":
      state = {
        ...state, // es6 展开，“继承”原来的object
        number: state.number * action.payload,
        alterations: [...state.alterations, action.payload]
      }
      break;
    default: 
      break;
  }
  return state;
};

// an example middleware
// const loLogger = (store) => (next) => (action) => {
//   console.log("Action fired:", action);
//   next(action);
// }

export const store = createStore(
  combineReducers({userReducer, mathReducer}),
  applyMiddleware(logger)
);