// Core
import React from 'react';

// Hooks
import { useQueryProfile } from './hooks/useQueryProfile';

export const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();
  console.log(profile);

  const loadProfile = () => {
    getProfile({
      variables: {
        id: 'C-1'
      }
    });
  };

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
    <>
      <h1>Profile:</h1>
      <button onClick={loadProfile}>Download Profile</button>
      <p>
        {profile && profile.name}
      </p>
    </>
  )
};
