const redux = require("redux");

// recieves two inputs
// 1.old state
// 2.Dispatched action
// return new state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "inc")
    return {
      counter: state.counter + 1,
    };
  if (action.type === "dec")
    return {
      counter: state.counter - 1,
    };
  return state;
};

const store = redux.createStore(counterReducer);
console.log(store.getState(), "intial");
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState, "final");
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "inc" });
store.dispatch({ type: "inc" });
store.dispatch({ type: "dec" });
