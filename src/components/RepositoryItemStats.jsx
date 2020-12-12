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

    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItem}>
                <Text style={styles.flexText}>{repository.stargazersCount}</Text>
                <Text style={styles.flexText}>Stars</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.flexText}>{repository.forksCount}</Text>
                <Text style={styles.flexText}>Forks</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.flexText}>{repository.ratingAverage}</Text>
                <Text style={styles.flexText}>Rating</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.flexText}>{repository.reviewCount}</Text>
                <Text style={styles.flexText}>Reviews</Text>
            </View>
        </View>
    );
};

export default RepositoryItemStats;