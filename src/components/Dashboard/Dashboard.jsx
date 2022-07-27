import React from 'react';
import {Button, Stack} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Dashboard() {
  const handleClickExpense = () => {
    alert('adding expense');
  };
  const handleClickGroup = () => {
    alert('adding group');
  };

  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto">Dashboard</h2>
        <h4 className="mx-auto">Total Balance</h4>
        <Button variant="primary" onClick={handleClickExpense}>
          Add Expense
        </Button>
        <Button variant="primary" onClick={handleClickGroup}>
          Add Group
        </Button>
      </Stack>
      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'reqpeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          alignItems: 'flex-start',
        }}></div> */}
    </Container>
  );
}

export default Dashboard;
