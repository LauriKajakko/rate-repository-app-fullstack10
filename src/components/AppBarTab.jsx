import React from 'react';
import Text from './Text';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';


const AppBarTab = ({ text, to }) => {
    const styles = StyleSheet.create({
        flexItem: {
            paddingTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 20,
        }
    });

    return(
      <Link to={to} component={TouchableOpacity} activeOpacity={0.8}>
        <View style={styles.flexItem}>
          <Text color='barText' fontSize='subheading' fontWeight='bold'> {text} </Text>        
        </View>
      </Link>
    );
};

export default AppBarTab;