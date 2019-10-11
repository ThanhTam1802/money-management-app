import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// STYLING
//import './styles/styles.scss';
//import 'normalize.css/normalize.css';

// COMPONENT
import AppRouter from './routers/AppRouter'

// REDUX
import configureStore from './store/configureStore';
// Redux actions
import { addExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters';

// Function
import selector from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleState = selector(state.expenses, state.filter)
  console.log(visibleState);
})

store.dispatch(addExpenses({ name: "Lunch", amount: 25000, createAt: 10 }));
store.dispatch(addExpenses({ name: "Coffee", amount: 20000, createAt: 15 }));
store.dispatch(setTextFilter("Lunch"));

const myApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(myApp, document.getElementById('app'))

