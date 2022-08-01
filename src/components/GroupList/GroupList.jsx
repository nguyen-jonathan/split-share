import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function GroupList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.groups);

  useEffect(() => {
    dispatch({type: 'FETCH_GROUPS'});
  }, []);

  return (
    <div>
      <h2>Groups</h2>
      {groups.map}
    </div>
  );
}

export default GroupList;
