// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { useState } from 'react';

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

  const authorizedCustomer = data && data.logIn;
  const token = authorizedCustomer && authorizedCustomer.token;

  if (token) {
    localStorage.setItem('token', token);
  }

  const logIn = () => {
    _logIn({
      variables: form
    });
  };

  return {
    logIn,
    handleChange,
    authorizedCustomer,
  }
};
