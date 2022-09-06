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
    setExpenseDescription(''), [];
    console.log('adding expense');
    alert('Saved new expense.');
    history.push('/info');
  };

  // useEffect(() => {
  //   handleClickSave();
  // }, []);
  // Cancel button to return to home page
  //   const handleClickCancel = () => {
  //     setGroupName('');
  //   };
  return (
    <Stack gap="3" className="col-md-2 mx-auto mt-4">
      <div className="bg-light border">
        <form>
          <h4>Add Transaction:</h4>

          <label>
            Date
            <input
              type="date"
              placeholder="Date"
              value={newExpenseDate}
              onChange={(event) => setExpenseDate(event.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="$0.00"
              value={newExpenseAmount}
              // onBlur={handleBlur}
              onChange={(event) => setExpenseAmount(event.target.value)}
              className="amount"
            />
            + for income, - for expense
          </label>
          <label>
            <input
              type="text"
              placeholder="Description"
              value={newExpenseDescription}
              onChange={(event) => setExpenseDescription(event.target.value)}
              className="description"
            />
          </label>

          <div className="buttons-div" style={{float: 'right'}}>
            <Button
              className="btn btn-success btn-sm"
              // id="testID"
              onClick={handleClickSave}>
              Save
            </Button>{' '}
            <Button
              className="btn btn-secondary btn-sm"
              onClick={() => history.push('/info')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Stack>
  );
}
export default AddExpense;
