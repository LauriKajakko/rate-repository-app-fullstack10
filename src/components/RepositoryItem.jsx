import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryItemInfo from './RepositoryItemInfo';
import RepositoryItemStats from './RepositoryItemStats';

const RepositoryItem = ({ repository }) => {

    const styles = StyleSheet.create({
        imageStyle: {
            width: 50,
            height: 50,
            borderRadius: theme.borderRadius.normal
        },
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            paddingEnd: 50,
            backgroundColor: theme.colors.ItemBackground
        },
        flexItem: {
            paddingHorizontal: 10,
            paddingTop: 10,
        },
    });

    return (
        <View>
            <View style={styles.flexContainer}>
                <View style={styles.flexItem}>
                    <Image 
                        style={styles.imageStyle}
                        source={{
                            uri: repository.ownerAvatarUrl
                        }}
                    />
                </View>
                <View style={styles.flexItem}>
                    <RepositoryItemInfo repository={repository} />
                </View>
            </View>
            <View >
                <RepositoryItemStats repository={repository} />
            </View>
        </View>
    );
};

export default RepositoryItem;