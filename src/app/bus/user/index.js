// Core
import React from 'react';

// Components
import { Registration } from './registration';
import { Users } from './users';
import { Login } from './login';

export const User = () => {
  return (
    <>
      <Registration />
      <Login />
      <Users />
    </>
  )
};
