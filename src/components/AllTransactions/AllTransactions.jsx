import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

function AllTransactions() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const exp = useSelector((store) => store.transaction);
  let {id} = useParams();
  useEffect(() => {
    dispatch({type: 'TRANSACTION', payload: id});
  });
  console.log('in Transaction');
  return (
    <div>
      {exp.length === 0 ? (
        <h1 className="spinner"></h1>
      ) : (
        <div>
          <p>{exp[0].date}</p>
          <p>{exp[0].amount}</p>
          <p>{exp[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default AllTransactions;
