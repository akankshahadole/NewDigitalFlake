import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    console.log('Logged in with:', { username, password });
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="App">
       <h1 className='icon'>D</h1>
      <h2><b>digital</b>flake</h2>
      <p>Welcome to Digitalflake Admin</p>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <label>
        
          <input
            type="text"
            value={username}
            placeholder=' Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
            <p className='forgot'><Link to="/newpass" style={{ color: 'rgb(101, 93, 93)',textDecoration: 'none' }}>Forgot Password?</Link></p>
        
        <button type="submit"><Link to="/home" style={{ color: 'white',textDecoration: 'none' }}>Log in</Link></button>
      </form>
    </div>
  );
}
export default Login;