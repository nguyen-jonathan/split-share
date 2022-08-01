import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

function Transactions() {
  const dispatch = useDispatch();
  // const history = useHistory();

  let {id} = useParams();
  useEffect(() => {
    dispatch({type: 'TRANSACTION', payload: id});
  });
  console.log('in Transaction');
  return <div>show all Transactions</div>;
}

export default Transactions;
