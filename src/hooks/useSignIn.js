import { useContext } from 'react'
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useContext(AuthStorageContext);

  const signIn = async (credentials) => {
    return mutate({ variables: {credentials} });
  };

  return [signIn, result];  
};

export default useSignIn;