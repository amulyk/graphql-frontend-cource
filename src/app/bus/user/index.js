// Core
import React from 'react';

// Hooks
import { useUserCreator } from './hooks/useUserCreator';

export const User = () => {
  const { handleChange, save, createdUser } = useUserCreator();

  const userJSX = createdUser && (
    <p>
      We already created customer with name: { createdUser.name }
    </p>
  );

  return (
    <>
      <h1>Registration</h1>
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="text" placeholder="email" name="email" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      { userJSX }
    </>
  )
};
