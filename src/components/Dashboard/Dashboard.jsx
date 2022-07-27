import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Budget</p>
      <p>Expense</p>
    </div>
  );
}

export default Dashboard;
