import React, {useState} from "react";
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
      // 로그인 처리 로직을 작성하세요
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">
            Username:
            <input
              className="login-input"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label className="login-label">
            Password:
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button className="login-button" type="submit">Log in</button>
        </form>
      </div>
    );
  };
export default Login;