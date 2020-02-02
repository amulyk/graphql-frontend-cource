import React from 'react';

// Hooks
import { useUserLogin } from './hooks/useUserLogin';

export const Login = () => {
  const { handleChange, logIn, authorizedUser } = useUserLogin();

  const authorizedUserJSX = authorizedUser && (
    <>
      <p>Authorized User: { authorizedUser.name }</p>
    </>
  );

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={logIn}>Login</button>
      {authorizedUserJSX}
    </>
  )
};
