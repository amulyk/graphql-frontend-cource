// Core
import React from 'react';

// Components
import { Counter } from './counter';
import { List } from './list';
import { SpecialList } from './specialList';
import { Profile } from './profile';

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <Profile />
      <Counter />
      <List />
      <SpecialList />
    </>
  )
};
