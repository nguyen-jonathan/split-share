import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import AddExpense from '../AddExpense/AddExpense';
import Moment from 'react-moment';
import './Transaction.css';

import {Link} from 'react-router-dom';
// material UI
// import {Grid} from '@mui/material';

function Transactions(props) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const exp = useSelector((store) => store.transaction);

  // const handleBlur = () => {
  //   var num = parseFloat(this.state.value);
  //   var cleanNum = num.toFixed(2);
  //   this.setState({value: cleanNum});
  // };
  function expenseEdit(expense) {
    console.log('in editExpense', expense);
    dispatch({type: 'EDIT_TRANSACTION', payload: expense});
  }

  useEffect(() => {
    dispatch({type: 'FETCH_TRANSACTION'});
  }, []);

  let expenses = [];
  for (let expense of exp) {
    expenses.push(
      <div key={expense.id}>
        <ul>
          <li>
            <Moment format="MM/DD/YYYY">{expense.date}</Moment>
          </li>
          {/* <li>{expense.date}</li> */}
          <li>{expense.description}</li>
          <li>{expense.amount.toFixed(2)}</li>
        </ul>
        <div>
          <Link to="/edit">
            <button onClick={() => expenseEdit(expense)}>Edit</button>
          </Link>
        </div>
        <div>
          <button>Delete</button>
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
