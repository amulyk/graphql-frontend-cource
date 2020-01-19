// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
  const [_logIn, { data }] = useMutation(mutationLogIn);
   const { form, handleChange } = useForm({
     username: '',
     password: ''
   });

   const logIn = () => {
     _logIn({
       variables: form
     });
   };

   return {
     logIn,
     handleChange,
     authorizedCustomer: data && data.logIn
   }
};
