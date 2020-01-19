import React from 'react';

// Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth';

export const Login = () => {
  const { handleChange, logIn, authorizedCustomer } = useCustomerAuth();

  const authorizedCustomerJSX = authorizedCustomer && (
    <>
      <p>Authorized Customer: { authorizedCustomer.customer.name }</p>
      <p>Token: { authorizedCustomer.token }</p>
    </>
  );

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={logIn}>Login</button>
      {authorizedCustomerJSX}
    </>
  )
};
