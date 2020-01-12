// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAllPets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
  const { loading, error, data } = useQuery(queryAllPets);

  const pets = data ? data.allPets : null;

  return { loading, error, pets };
}
