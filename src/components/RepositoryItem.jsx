import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ repository }) => (
    <View>
        <Text>Full name: {repository.fullName}</Text>
        <Text>Description: {repository.description}</Text>
        <Text>Language: {repository.language}</Text>
        <Text>Stars: {repository.forksCount}</Text>
        <Text>Forks: {repository.stargazersCount}</Text>
        <Text>Reviews: {repository.ratingAverage}</Text>
        <Text>Rating: {repository.reviewCount}</Text>
    </View>
);

export default RepositoryItem;