import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Balance() {
  const exp = useSelector((store) => store.transaction);
  const dispatch = useDispatch();
  const [totalBalance, setTotalBalance] = useState(calculateTotal(exp));

  function calculateTotal(expenses) {
    let temp = 0;
    expenses.forEach(function (expense) {
      temp += expense.amount;
    });
    return temp;
  }

  // const numberFormat = (totalBalance) =>
  //   new Intl.NumberFormat('en-IN', {
  //     style: 'currency',
  //     currentcy: 'INR',
  //   }).format(value);

  useEffect(() => {
    // dispatch({type: 'FETCH_TRANSACTION'});
    setTotalBalance(calculateTotal(exp));
  }, [exp]);

  return (
    <div>
      <h2>Total Spending:</h2>
      <h3>
        $ {totalBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}
      </h3>
    </div>
  );
}

export default Balance;
