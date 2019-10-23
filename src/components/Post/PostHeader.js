import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar';
import Box from '../Box';

export default ({post}) => (
    <Box>
        <View style={styles.container}>
            <View style={styles.profile}>
                <Avatar uri={post.profile.imageUrl} size={4}/>
                <Box>
                    <Text>{post.profile.profileName}</Text>
                    <Text style={styles.location}>{post.location}</Text>
                </Box>
            </View>
            <FontAwesomeIcon icon={faEllipsisH}/>
        </View>
    </Box>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    location: {
        fontSize: 10,
    },
    postDetails: {
        fontWeight: 'bold',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
    },
});
