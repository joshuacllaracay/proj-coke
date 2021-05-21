import './App.css';
import React, { useState } from 'react';
// import './global.css';


function App() {
  const [ usernameReg, setUsernameReg ] = useState('');
  const [ passwordReg, setPasswordReg ] = useState('');


  return (
    <div className="App">
      <div classname="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text"
         onChange = {(e) => {
           setUsernameReg(e.target.value);
         }} 
        />
        <label>Password</label>
        <input type="text" 
          onChange = {(e) => {
           setPasswordReg(e.target.value);
         }} 
        />
        <button> Register </button>
      </div>
      <div classname="Login">
       <input type="text" placeholder="Username..." />
       <input type="password" placeholder="Password..." />
       <button> Login </button> 
      </div>
    </div>
  );
}

export default App;
