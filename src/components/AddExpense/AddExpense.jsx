import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack, Form} from 'react-bootstrap';
import select from 'react-select';

function AddExpense() {
  console.log('in AddGroup');
  const dispatch = useDispatch();
  const history = useHistory();
  //   const group = useSelector((store) => store.newGroup);

  const [newExpenseDate, setExpenseDate] = useState('');
  const [newExpenseAmount, setExpenseAmount] = useState('');
  const [newExpenseDescription, setExpenseDescription] = useState('');
  const [newGroupSelect, setGroupSelect] = useState('');
  //   useEffect(() => {
  //     dispatch({type: 'GET_NEW_GROUP'});
  //   }, []);
  const groupList = [
    {value: 'chocolate', label: 'Chicago Trip'},
    {value: 'strawberry', label: 'Roommates'},
    {value: 'vanilla', label: 'test'},
  ];

  // Save button to gather and save input data
  const handleClickSave = () => {
    // validate text

    console.log('adding expense');
    history.push('/info');
  };
  // Cancel button to return to home page
  //   const handleClickCancel = () => {
  //     setGroupName('');
  //   };
  return (
    <Stack gap="3" className="col-md-2 mx-auto">
      <p>Enter a new expense</p>
      <input
        type="date"
        placeholder="Date"
        value={newExpenseDate}
        onChange={(event) => setExpenseDate(event.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={newExpenseAmount}
        onChange={(event) => setExpenseAmount(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newExpenseDescription}
        onChange={(event) => setExpenseDescription(event.target.value)}
      />
      <select
        option={groupList}
        placeholder="Group Name"
        defaultValue={groupList[0]}
        value={newGroupSelect}
        onChange={(event) => setGroupSelect(event.target.value)}
      />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={() => history.push('/info')}>Cancel</button>
    </Stack>
  );
}
export default AddExpense;
