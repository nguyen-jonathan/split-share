import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import Transactions from '../Transactions/Transactions';
import AddExpense from '../AddExpense/AddExpense';

function AllTransactions() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const exp = useSelector((store) => store.transaction);

  useEffect(() => {
    dispatch({type: 'FETCH_TRANSACTION'});
  }, []);
  console.log('in Transaction');
  return (
    <div>
      {exp.map((e) => {
        return <Transactions item={e} key={e.id} />;
      })}
    </div>
  );
}

export default AllTransactions;
