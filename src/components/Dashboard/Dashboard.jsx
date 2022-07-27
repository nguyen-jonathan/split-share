import React from 'react';
import {Button, Stack} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Dashboard() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto">Dashboard</h2>
        <h4 className="mx-auto">Total Balance</h4>
        <Button variant="primary">Add Expense</Button>
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
