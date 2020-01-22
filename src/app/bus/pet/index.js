// Core
import React from 'react';

// Components
// import { Counter } from './counter';
// import { List } from './list';
// import { SpecialList } from './specialList';
// import { Profile } from './profile';
import { CheckinPet } from './checkinPet';
import { PetReturned } from './petReturned';

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <CheckinPet />
      <PetReturned />
      {/*<Profile />*/}
      {/*<Counter />*/}
      {/*<List />*/}
      {/*<SpecialList />*/}
    </>
  )
};
