const mathInitState = {
  number: 100,
  alterations: [],
  cunzaiganstr: "La la la"
};

export const mathReducer = (state = mathInitState, action) => {
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