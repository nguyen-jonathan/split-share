import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Balance() {
  const exp = useSelector((store) => store.transaction);
  // const dispatch = useDispatch();
  const [totalIncome, setTotalIncome] = useState(calculateIncomeTotal(exp));
  const [totalExpense, setTotalExpense] = useState(calculateExpenseTotal(exp));

  function calculateIncomeTotal(expenses) {
    let temp = 0;
    expenses.forEach(function (expense) {
      // expenses
      //   .filter((expenses) => expenses > 0)
      //   .reduce((temp, expenses) => (temp += expenses), 0)
      //   .forEach(function (expense) {
      temp += expense.amount;
    });
    return temp;
  }
  function calculateExpenseTotal(expenses) {
    // let temp = 0;
    // expenses.forEach(function (expense) {
    //   temp -= expense.amount;
    // });
    // return temp;

    ///  ---- loop ------ ///

    //   let negative = [];
    //   let sum = 0;

    //   for (var i = 0; i < expenses.length; i++) {
    //     if (expenses[i] < 0) {
    //       negative.push(expenses[i]);
    //     } else {
    //       sum += expenses[i];
    //     }
    //   }
    //   console.log(negative);
    //   return sum;
    // }
    // let sumResult = calculateExpenseTotal(exp);
    // console.log(sumResult);

    /// ---- second loop ---- ///

    if (expenses < 0) {
      return expenses;
    } else {
      console.log(expenses);
      return -Math.abs(expenses);
    }
  }

  useEffect(() => {
    // dispatch({type: 'FETCH_TRANSACTION'});
    setTotalIncome(calculateIncomeTotal(exp));
    setTotalExpense(calculateExpenseTotal(exp));
  }, [exp]);

  return (
    <div>
      <div>
        <h2>Total Income:</h2>
        <h3>
          $ {totalIncome.toLocaleString(undefined, {minimumFractionDigits: 2})}
        </h3>
      </div>
      <div>
        <h2>Total Expense:</h2>
        <h3>$ -{totalExpense}</h3>
      </div>
    </div>
  );
}

export default Balance;
