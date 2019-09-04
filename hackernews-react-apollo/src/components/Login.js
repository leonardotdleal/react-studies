import React, { useState } from 'react';

const initialState = { email: '', login: true, name: '', password: '' };

function Login() {
  const [auth, setLogin] = useState(initialState);

  const confirm = async () => {
    // ... you'll implement this 🔜
  };

  const saveUserData = token => {
    // localStorage.setItem(AUTH_TOKEN, token)
  };

  return (
    <div>
      <h4 className='mv3'>{auth.login ? 'Login' : 'Sign Up'}</h4>
      <div className='flex flex-column'>
        {!auth.login && (
          <input
            onChange={e => setLogin({ ...auth, name: e.target.value })}
            type='text'
            placeholder='Your name'
          />
        )}
        <input
          onChange={e => setLogin({ ...auth, email: e.target.value })}
          type='text'
          placeholder='Your email address'
        />
        <input
          onChange={e => setLogin({ ...auth, password: e.target.value })}
          type='password'
          placeholder='Choose a safe password'
        />
      </div>
      <div className='flex mt3'>
        <div className='pointer mr2 button' onClick={() => confirm()}>
          {auth.login ? 'login' : 'create account'}
        </div>
        <div
          className='pointer button'
          onClick={() => setLogin({ ...auth, login: !auth.login })}
        >
          {auth.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </div>
      </div>
    </div>
  );
}

export default Login;
