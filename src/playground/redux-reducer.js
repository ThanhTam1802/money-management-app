import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    name: 'Thanh Tam',
    amount: 500000
  }],
  filter: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

// EXPENSES REDUCER
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

// FILTER REDUCER
const filterReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefault, action) => {
  switch (action.type) {
    default:
      return state
  };
};

// STORE CREATION
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

console.log(store.getState())