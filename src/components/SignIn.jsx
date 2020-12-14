import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInForm from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';

const SignIn = () => {

  const styles = StyleSheet.create({
    formView: {
      backgroundColor: 'white'
    }

  });

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username required'),
    password: yup
      .string()
      .required('Password required')
  });

  return (
    <View style={styles.formView}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;