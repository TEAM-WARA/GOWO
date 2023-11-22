import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 간단한 로그인 확인을 수행하는 코드
    if (username === 'user' && password === 'password') {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
