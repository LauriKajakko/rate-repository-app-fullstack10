import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  main: {
    backgroundColor: theme.colors.MainBackground
  }
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
            <RepositoryList />
        </Route>
        <Route path="/signin" exact>
            <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View> 
  );
};

export default Main;