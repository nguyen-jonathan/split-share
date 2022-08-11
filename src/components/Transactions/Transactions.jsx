import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import AddExpense from '../AddExpense/AddExpense';
import Moment from 'react-moment';
import {Button} from 'react-bootstrap';
import './Transaction.css';

import {Link} from 'react-router-dom';
// material UI
// import {Grid} from '@mui/material';
function Transactions(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const exp = useSelector((store) => store.transaction).sort((a, b) =>
    a.id > b.id ? 1 : -1
  );

  // const handleBlur = () => {
  //   var num = parseFloat(this.state.value);
  //   var cleanNum = num.toFixed(2);
  //   this.setState({value: cleanNum});
  // };
  function expenseEdit(expense) {
    console.log('in editExpense', expense);
    let queryString =
      'id=' +
      expense.id +
      '&date=' +
      expense.date +
      '&amount=' +
      expense.amount +
      '&description=' +
      expense.description;
    // dispatch({type: 'EDIT_TRANSACTION', payload: expense});

    history.push(`/edit?${queryString}`);
  }

  function expenseDelete(expense) {
    console.log('in deleting expense', expense);
    dispatch({type: 'DELETE_EXPENSE', payload: expense.id});
    history.push(`/info`);
  }

  useEffect(() => {
    dispatch({type: 'FETCH_TRANSACTION'});
  }, []);

  let expenses = [];
  for (let expense of exp) {
    expenses.push(
      <div class="container" key={expense.id}>
        <ul>
          <li>
            <Moment format="MM/DD/YYYY">{expense.date}</Moment>
          </li>
          {/* <li>{expense.date}</li> */}
          <li>{expense.description}</li>
          <li>{expense.amount.toFixed(2)}</li>
        </ul>
        <div class="row">
          <Button
            class="btn btn-primary btn-sm"
            onClick={() => expenseEdit(expense)}>
            Edit
          </Button>
          <div class="column">
            <Button
              class="btn btn-primary btn-sm"
              onClick={() => expenseDelete(expense)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* <p>Expense: {JSON.stringify(exp)}</p> */}
      {expenses}
      {/* {exp.length === 0 ? (
        <h1 className="spinner"></h1>
      ) : (
        <div>
          <p>{exp[0].date}</p>
          <p>{exp[0].amount}</p>
          <p>{exp[0].description}</p>
        </div>
      )} */}
    </div>
  );
}

export default Transactions;
