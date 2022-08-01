import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function GroupList() {
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.groups);

  useEffect(() => {
    dispatch({type: 'FETCH_GROUPS'});
  }, []);

  return (
    <div>
      <h2>Groups</h2>
      {/* {groups.map((group)=>{
        return<
      })} */}
    </div>
  );
}

export default GroupList;
