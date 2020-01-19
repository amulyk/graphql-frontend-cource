import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
  const [addUser, { data }] = useMutation(mutationCreateAccount);
  const {form, handleChange} = useForm({
    name: '',
    username: '',
    password: ''
  });

  const save = () => {
    addUser({
      variables: {
        account: form
      }
    })
  };

  return {
    handleChange,
    save,
    createdAccount: data && data.createAccount
  }
};
