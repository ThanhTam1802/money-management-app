import { createStore } from 'redux';

// Action generator - function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
const setCount = ({ count }) => ({
  type: 'SET',
  count
})
const reset = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        const: action.count
      };
    default:
      return state;
  }
})
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 4 }));
store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(setCount({ count: 20 }));
store.dispatch(reset());