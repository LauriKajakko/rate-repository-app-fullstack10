import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RepositoryItemInfo = ({ repository }) => {

    const styles = StyleSheet.create({
        languageText: {
            backgroundColor: theme.colors.primary,
            color: 'white',
        },
        flexContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        flexItem: {
            width: 'auto',
            flexGrow: 1
        },
        languageItem: {
            alignSelf: 'baseline',
            borderRadius: theme.borderRadius.normal
        },
    });

    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItem} >
                <Text fontSize='subheading' color='testSecondary' fontWeight='bold'>{repository.fullName}</Text>
            </View>
            <View >
                <Text>{repository.description}</Text>
            </View>
            <View style={styles.languageItem} >
                <Text style={styles.languageText}>{repository.language}</Text>
            </View>
        </View>
    );
};

export default RepositoryItemInfo;