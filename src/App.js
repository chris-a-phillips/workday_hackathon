import React from 'react';
import Landing from './frontend/Landing/Landing';
import './App.css';
import Form from './frontend/Form/Form';

function App() {
  return (
    <div className="App">
      <div className="landing">
        <Landing />
      </div>
      <div className="user-entry-form">
        <Form />
      </div>
    </div>
  );
}

export default App;
