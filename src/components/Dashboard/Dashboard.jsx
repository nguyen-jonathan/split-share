import React from 'react';
import {Button, Stack, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
// import GroupList from '../GroupList/GroupList';
import Balance from '../Balance/Balance';
import Transactions from '../Transactions/Transactions';

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
        </Col>
        <Col md="auto">
          <Balance />
        </Col>
        <Col style={{display: 'flex', justifyContent: 'right'}}>
          <Link to="/expense">
            <Button variant="primary">Add Expense</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <GroupList /> */}
          test
        </Col>
        <Col>
          <Transactions />
        </Col>
        <Col></Col>
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
