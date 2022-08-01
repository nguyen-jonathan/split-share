import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function GroupList() {
  const dispatch = useDispatch();
  const groupsStore = useSelector((store) => store.groupsList);

  useEffect(() => {
    dispatch({type: 'FETCH_GROUPS'});
  }, []);

  return (
    <div>
      <h2>Groups</h2>
      {groupsStore.map((group) => (
        <li>{group.name}</li>
      ))}
    </div>
  );
}

export default GroupList;
