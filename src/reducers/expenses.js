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

export default expensesReducer;