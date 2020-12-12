import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme'

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
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </View> 
  );
};

export default Main;