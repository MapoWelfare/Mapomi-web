import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <div style={{ width: '600px' }}>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  };

export default Login;