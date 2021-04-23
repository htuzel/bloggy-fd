import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function register() {
    const data = {
      name,
      email,
      password
    };

    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  }


  return (
    <div className="App">
      <div>
        <input value={name} onChange={handleChange} type="text" name="name"></input>
        <input value={email} onChange={handleChange} type="text" name="email"></input>
        <input value={password} onChange={handleChange} type="password" name="password"></input>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default App;
