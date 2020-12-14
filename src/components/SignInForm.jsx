import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    flexContainer: {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'flex-end',
      margin: 10,
    },
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      padding:10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10
    },
    buttonText: {
      marginTop: 5, 
      marginBottom: 5, 
      color: 'white', 
      fontWeight: 'bold',
    }
  });

const SignInForm = ({ onSubmit }) => {

    return (
        <View style={styles.flexContainer}>
            <FormikTextInput name="username" placeholder="Username"/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInForm;