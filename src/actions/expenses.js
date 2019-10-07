import uuid from 'uuid';

// ADD_EXPENSES
export const addExpenses = (
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
export const removeExpenses = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSES',
  id
});

// EDIT_EXPENSES
export const editExpenses = (id, update) => ({
  type: 'EDIT_EXPENSES',
  id,
  update
})