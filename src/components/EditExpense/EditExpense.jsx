import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {Button, Stack, Form} from 'react-bootstrap';
import {select} from 'react-select';
import queryString from 'query-string';
import moment from 'moment';
import './EditExpense.css';

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
    moment(values.date).toISOString().substring(0, 10)
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
      id: values.id,
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
    <Stack gap="3" className="col-md-2 mx-auto mt-4">
      <div className="bg-light border">
        <form>
          <h4>Edit the expense:</h4>
          <label>
            <input
              type="date"
              placeholder="Date"
              defaultValue={editExpenseDate}
              onChange={(event) => setExpenseDate(event.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="$0.00"
              value={editExpenseAmount}
              // onBlur={handleBlur}
              onChange={(event) => setExpenseAmount(event.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Description"
              value={editExpenseDescription}
              onChange={(event) => setExpenseDescription(event.target.value)}
            />
          </label>
          <div className="buttons">
            <Button
              className="btn btn-success btn-sm"
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
export default EditExpense;
