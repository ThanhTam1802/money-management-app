import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  expenses: [{
    id: 'jk47mit20',
    name: 'Thanh Tam',
    amount: 500000
  }],
  filter: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

// ADD_EXPENSES
const addExpenses = (
  {
    name = '',
    amount = 0,
    createAt = undefined
  } = {}
) => ({
  type: 'ADD_EXPENSES',
  expenses: {
    id: uuid(),
    name,
    amount,
    createAt
  }
});

// REMOVE_EXPENSES
const removeExpenses = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSES',
  id
});

// EDIT_EXPENSES
const editExpenses = (id, update) => ({
  type: 'EDIT_EXPENSES',
  id,
  update
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
// SET_START_DATE
const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date
})
// SET_START_DATE
const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
})

// EXPENSES REDUCER
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSES':
      return [...state, action.expenses];

    case 'REMOVE_EXPENSES':
      return state.filter(({ id }) => { return id !== action.id });

    case 'EDIT_EXPENSES':
      return state.map((expenses) => {
        if (expenses.id === action.id) {
          return {
            ...state,
            ...action.update
          }
        } else {
          return state
        }
      })
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
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.date }
    case 'SET_END_DATE':
      return { ...state, endDate: action.date }
    default:
      return state
  };
};
// GET VISIBLE EXPENSIVE
const getVisibleExpensive = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt > startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt < endDateMatch;
    const textMacth = expense.name.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMacth;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.
    }
  })
};

// STORE CREATION
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpensive = getVisibleExpensive(state.expenses, state.filter);
  console.log(visibleExpensive);
});

const A = store.dispatch(addExpenses({ name: 'Breakfast', amount: 150, createAt: 100 }));
const B = store.dispatch(addExpenses({ name: 'Lunch', amount: 150, createAt: 200 }));
const C = store.dispatch(addExpenses({ name: 'Coffee', amount: 150 }));
const D = store.dispatch(addExpenses({ name: 'Coffee and dinner', amount: 150 }));
//store.dispatch(addExpenses());

// store.dispatch(removeExpenses({ id: Quyen.expenses.id }))
// store.dispatch(removeExpenses({ id: Nang.expenses.id }))

// store.dispatch(editExpenses(Nang.expenses.id, { amount: 200000 }))

//store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(200));
// store.dispatch(setEndDate());

// // TESTING
// const student = {
//   id: '16DH110238',
//   name: 'Thanh Tam'
// }
// const element = {
//   class: 'TH1604',
//   major: 'Information technology'
// }
// console.log({ ...student, ...element })
