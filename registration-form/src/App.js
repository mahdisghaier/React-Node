import React from 'react';
import './App.css';
import './RegistrationForm.css';  // Import the CSS file
import RegistrationForm from './ResgitrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
