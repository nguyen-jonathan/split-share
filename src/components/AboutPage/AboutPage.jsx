import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Technologies Used:</h2>
        <h4>
          HTML, JavaScript, React, CSS, BootStrap, Redux, Redux-Saga, Axios,
          Node, Express, PostgreSQL
        </h4>
      </div>
      <br />
      <div>
        <h2>Future Goals:</h2>
        <ul>
          <h4>
            <li>Groups</li>
            <li>Expense Split</li>
            <li>Income/Expense separate calculations</li>
          </h4>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
