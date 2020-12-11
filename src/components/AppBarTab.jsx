import React from 'react';
import Text from './Text';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';


const AppBarTab = ({ text }) => {
    const styles = StyleSheet.create({
        flexItem: {
            paddingTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 20,
        }
    });

    return(
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <View style={styles.flexItem}>
        <Text color='barText' fontSize='subheading' fontWeight='bold'> {text} </Text>        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;