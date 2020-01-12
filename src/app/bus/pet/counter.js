// Core
import React from 'react';

// Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets';

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }

  return (
    <p>
      AvailablePets:
      {data.availablePets}
    </p>
  )
};
