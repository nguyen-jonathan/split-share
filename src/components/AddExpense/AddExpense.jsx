import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack, Form, Card} from 'react-bootstrap';
import {select} from 'react-select';
import './AddExpense.css';

function AddExpense() {
  console.log('in AddGroup');
  const dispatch = useDispatch();
  const history = useHistory();

  const [newExpenseDate, setExpenseDate] = useState('');
  const [newExpenseAmount, setExpenseAmount] = useState('');
  const [newExpenseDescription, setExpenseDescription] = useState('');

  const user = useSelector((store) => store.user);
  // waits for a period of time then resolves
  // function timeout(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  // useEffect(() => {
  //   let isCancelled = false;
  //   const handleChange = async () => {
  //     await timeout(1000);
  //     if (!isCancelled) {
  //       console.log('value updated');
  //     }
  //   };
  //   handleChange();
  //   // cleanup function when useEffect is called again
  //   return () => {
  //     isCancelled = true;
  //   };
  // }, []);

  // Save button to gather and save input data
  const handleClickSave = () => {
    // validate text
    const expensePayload = {
      date: newExpenseDate,
      amount: newExpenseAmount,
      description: newExpenseDescription,
      user_id: user.id,
    };

    dispatch({type: 'ADD_EXPENSE', payload: expensePayload});
    setExpenseDate(''), setExpenseAmount('');
    setExpenseDescription('');
    console.log('adding expense');
    alert('Saved new expense.');
    history.push('/info');
  };

  // Cancel button to return to home page
  //   const handleClickCancel = () => {
  //     setGroupName('');
  //   };
  return (
    <Stack gap="3" className="col-md-2 mx-auto">
      <h4>Add an expense:</h4>

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
        // onBlur={handleBlur}
        onChange={(event) => setExpenseAmount(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newExpenseDescription}
        onChange={(event) => setExpenseDescription(event.target.value)}
      />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={() => history.push('/info')}>Cancel</button>
      {/* <p>
        {newExpenseDate} {newExpenseAmount} {newExpenseDescription} {user.id}
      </p> */}
    </Stack>
  );
}
export default AddExpense;
