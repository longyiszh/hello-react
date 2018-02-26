const userInitState = {
  name: "valorad",
  age: 0
}

export const userReducer = (state = userInitState, action) => {
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

    // capability with redux-promise-middleware
    case "SET_AGE_FULFILLED":
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