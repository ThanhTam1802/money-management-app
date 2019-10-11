import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
  return (
    <div>
      <h2>Expense list :</h2>
      {
        props.expenses.map((item) => {
          return (
            <div>
              <p>{item.name} : {item.amount}</p>
            </div>
          )
        })
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);