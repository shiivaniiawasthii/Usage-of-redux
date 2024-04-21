import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  console.log(action, "action");
  if (action.type === "inc") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "dec") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
