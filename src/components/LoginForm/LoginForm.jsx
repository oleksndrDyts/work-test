import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <button type="submit">go</button>
      </form>
    </>
  );
};

export default LoginForm;
