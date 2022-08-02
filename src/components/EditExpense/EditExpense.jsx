import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {Button, Stack, Form} from 'react-bootstrap';
import {select} from 'react-select';
import queryString from 'query-string';
import moment from 'moment';

function EditExpense() {
  console.log('in Edit expense');
  const dispatch = useDispatch();
  const history = useHistory();

  const {search} = useLocation();
  const values = queryString.parse(search);
  console.log(values.id); // "top"

  // const windowUrl = window.location.search;
  // const params = new URLSearchParams(windowUrl);
  // console.log(params.get('id'));

  const [editExpenseDate, setExpenseDate] = useState(
    moment(values.date).format('MM/DD/YYYY')
  );
  const [editExpenseAmount, setExpenseAmount] = useState(values.amount);
  const [editExpenseDescription, setExpenseDescription] = useState(
    values.description
  );

  const user = useSelector((store) => store.user);
  // const exp = useSelector((store) => store.edit);
  // console.log(exp);

  useEffect(() => {
    dispatch({type: 'SET_EXPENSE'});
  }, []);

  // Save button to gather and save input data
  const handleClickSave = () => {
    // validate text
    const expensePayload = {
      date: editExpenseDate,
      amount: editExpenseAmount,
      description: editExpenseDescription,
      user_id: user.id,
    };

    dispatch({type: 'EDIT_EXPENSE', payload: expensePayload});
    setExpenseDate(''), setExpenseAmount('');
    setExpenseDescription('');
    console.log('editing expense');
    alert('Saved new expense.');
    history.push('/info');
  };

  // Cancel button to return to home page
  //   const handleClickCancel = () => {
  //     setGroupName('');
  //   };
  return (
    <Stack gap="3" className="col-md-2 mx-auto">
      <p>Edit the expense</p>
      <input
        type="date"
        placeholder="Date"
        value={editExpenseDate}
        onChange={(event) => setExpenseDate(event.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={editExpenseAmount}
        // onBlur={handleBlur}
        onChange={(event) => setExpenseAmount(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={editExpenseDescription}
        onChange={(event) => setExpenseDescription(event.target.value)}
      />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={() => history.push('/info')}>Cancel</button>
    </Stack>
  );
}
export default EditExpense;
