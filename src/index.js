// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from "redux";

const initialState = {
  number: 100,
  alterations: [],
  cunzaiganstr: "La la la"
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

store.subscribe(() => {
  console.log("store updated to", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "ADD",
  payload: 200
});

store.dispatch({
  type: "SUBTRACT",
  payload: 300
});

store.dispatch({
  type: "MULTIPLY",
  payload: 3
});