import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack, Form, Card} from 'react-bootstrap';
import {select} from 'react-select';
import './AddIncome.css';

function AddIncome() {
  console.log('in AddGroup');
  const dispatch = useDispatch();
  const history = useHistory();

  const [newIncomeDate, setIncomeDate] = useState('');
  const [newIncomeAmount, setIncomeAmount] = useState('');
  const [newIncomeDescription, setIncomeDescription] = useState('');

  const user = useSelector((store) => store.user);

  // Save button to gather and save input data
  const handleClickSave = () => {
    const incomePayload = {
      date: newIncomeDate,
      amount: newIncomeAmount,
      description: newIncomeDescription,
      user_id: user.id,
    };

    dispatch({type: 'ADD_INCOME', payload: incomePayload});
    setIncomeDate(''), setIncomeAmount('');
    setIncomeDescription(''), [];
    console.log('adding income');
    alert('Saved new income');
    history.push('/info');
  };

  return (
    <Stack gap="3" className="col-md-2 mx-auto mt-4">
      <div className="bg-light border">
        <form>
          <h4>Add an income:</h4>

          <label>
            <input
              type="date"
              placeholder="Date"
              value={newIncomeDate}
              onChange={(event) => setIncomeDate(event.target.value)}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="$0.00"
              value={newIncomeAmount}
              onChange={(event) => setIncomeAmount(event.target.value)}
              className="amount"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Description"
              value={newIncomeDescription}
              onChange={(event) => setIncomeDescription(event.target.value)}
              className="description"
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
export default AddIncome;
