import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function GroupList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  useEffect(() => {
    dispatch({type: 'FETCH_GROUPS'});
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default GroupList;
