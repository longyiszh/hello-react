export const setName = (name) => {
  return {
    type: "SET_NAME",
    payload: name
  }
};

export const setAge = (age) => {
  // simulates async action

  // --> version 1: needs "redux-thunk" package.

  // return (act) => {
  //   setTimeout(() => {
  //     act({
  //       type: "SET_AGE",
  //       payload: age
  //     })
  //   }, 888);
  // }

  // --> version 2: needs "redux-promise-middleware" package.
  return {
    type: "SET_AGE",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 888);
    })
  }

};