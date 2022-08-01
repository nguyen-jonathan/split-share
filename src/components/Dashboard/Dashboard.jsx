import React from 'react';
import {Button, Stack, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Dashboard() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h2>Dashboard</h2>
          <p>show all group</p>
          <p>show all group</p>
          <p>show all group</p>
          <p>show all group</p>
        </Col>
        <Col md="auto">
          <h4>Total Balance</h4>
          <p>show all transactions</p>
          <p>show all transactions</p>
          <p>show all transactions</p>
          <p>show all transactions</p>
        </Col>
        <Col style={{display: 'flex', justifyContent: 'right'}}>
          <Link to="/expense">
            <Button variant="primary">Add Expense</Button>
          </Link>
          <Link to="/group">
            <Button variant="primary">Add Group</Button>
          </Link>
        </Col>
      </Row>
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
