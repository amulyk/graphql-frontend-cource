// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryPetById = loader('./gql/queryPetById.graphql');

export const useQueryProfile = () => {
  const [getProfile, { loading, error, data }] = useLazyQuery(queryPetById);

  return { getProfile, loading, error, profile: data && data.petById }
};
