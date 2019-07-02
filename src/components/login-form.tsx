import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

import { handleLogin } from '../utils/auth';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const values = { username: '', password: '' };
  for (const input of Array.from(e.currentTarget.elements)) {
    const { name, value } = input as HTMLInputElement;
    if (name === 'username') values.username = value;
    if (name === 'password') values.password = value;
  }
  handleLogin(values);
};

const LoginForm = () => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <p className="control has-icons-left">
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
          required={true}
          aria-required="true"
          aria-label="Username"
        />
        <span className="icon is-small is-left">
          <FaUser />
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control has-icons-left">
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          required={true}
          aria-required="true"
          aria-label="Password"
        />
        <span className="icon is-small is-left">
          <FaLock />
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button className="button is-primary is-rounded">Submit</button>
      </p>
    </div>
  </form>
);

export default LoginForm;
