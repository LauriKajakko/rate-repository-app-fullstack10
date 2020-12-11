import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View>
    <AppBar/>
    <View style={styles.container}>
      <Text color='primary'>Rate Repository Application</Text>
      <RepositoryList />
    </View>
    </View> 
  );
};

export default Main;