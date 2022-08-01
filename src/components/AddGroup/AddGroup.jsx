import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack, Form} from 'react-bootstrap';

function AddGroup() {
  console.log('in AddGroup');
  const dispatch = useDispatch();
  const history = useHistory();
  //   const group = useSelector((store) => store.newGroup);

  const [newGroupName, setGroupName] = useState('');

  //   useEffect(() => {
  //     dispatch({type: 'GET_NEW_GROUP'});
  //   }, []);

  // Save button to gather and save input data
  const handleClickSave = () => {
    // validate text
    if (newGroupName !== '') {
      const createGroup = {
        name: newGroupName,
      };
      console.log(createGroup);
      dispatch({type: 'POST_GROUP', payload: createGroup});
      setGroupName('');
    } else {
      alert('error in saving');
    }
    console.log('adding new group');
    history.push('/info');
  };
  // Cancel button to return to home page
  //   const handleClickCancel = () => {
  //     setGroupName('');
  //   };
  return (
    <Stack gap="3" className="col-md-2 mx-auto">
      <label>Start a new group</label>
      <input
        type="text"
        placeholder="Group Name"
        value={newGroupName}
        onChange={(event) => setGroupName(event.target.value)}
      />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={() => history.push('/info')}>Cancel</button>
    </Stack>
  );
}
export default AddGroup;
