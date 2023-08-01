import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  let displayIcon = () => {
    if (password.length <= 7)
      return (
        <i
          style={{ fontSize: 28, marginLeft: 5, color: '#ec0909' }}
          class="fa-solid fa-xmark"></i>
      );
    if (password.length >= 8)
      return (
        <i
          class="fa-solid fa-check"
          style={{ fontSize: 28, marginLeft: 5, color: '#37ff00' }}></i>
      );
  };

  let displayError = () => {
    if (password.length <= 0)
      return <p style={{ color: 'red' }}>A password is required</p>;
    if (password.length < 8)
      return <p style={{ color: 'red' }}>Your password is too short</p>;
  };

  return (
    <>
      <label>
        Password
        <div style={{ display: 'flex' }}>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}></input>
          {displayIcon()}
        </div>
        {displayError()}
      </label>
    </>
  );
}
