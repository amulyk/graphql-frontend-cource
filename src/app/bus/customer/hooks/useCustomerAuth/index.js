// Hooks
import { useForm } from '../useForm';

export const useCustomerAuth = () => {
   const { form, handleChange } = useForm({
     username: '',
     password: ''
   });

   const logIn = () => {
     console.log(form);
   };

   return {
     logIn,
     handleChange,
   }
};
