import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function AddTransaction() {
  console.log('in addTransaction');
  const dispatch = useDispatch();
  const transactions = useSelector((store) => store.expenseTransaction);
}

return <div></div>;

export default AddTransaction;
