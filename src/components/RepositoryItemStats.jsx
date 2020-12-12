import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RepositoryItemStats = ({ repository }) => {

    const styles = StyleSheet.create({
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme.colors.ItemBackground
        },
        flexItem: {
            paddingTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 20,
            flexGrow: 1,
        },
        flexText: {
            textAlign: 'center'
        }
    });

    const modifiedStarCount = () => {
        let newCount = 0;

        repository.stargazersCount > 999
            ? newCount = Math.round(((repository.stargazersCount / 1000)*10))/10 + 'k'
            : newCount = repository.stargazersCount;
        
        return newCount;
    };

    const modifiedForkCount = () => {
        let newCount = 0;

        repository.forksCount > 999
            ? newCount = Math.round(((repository.forksCount / 1000)*10))/10 + 'k'
            : newCount = repository.forksCount;
        
        return newCount;
    };

    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItem}>
                <Text style={styles.flexText} fontWeight='bold'>{modifiedStarCount()}</Text>
                <Text style={styles.flexText}>Stars</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.flexText} fontWeight='bold'>{modifiedForkCount()}</Text>
                <Text style={styles.flexText}>Forks</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.flexText} fontWeight='bold'>{repository.ratingAverage}</Text>
                <Text style={styles.flexText}>Rating</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.flexText} fontWeight='bold'>{repository.reviewCount}</Text>
                <Text style={styles.flexText}>Reviews</Text>
            </View>
        </View>
    );
};

export default RepositoryItemStats;