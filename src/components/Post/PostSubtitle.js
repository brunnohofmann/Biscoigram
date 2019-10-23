import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import Box from '../Box';

const Comment = (comment) => (
    <View key={comment.id} style={styles.comment}>
        <Text><Text style={styles.profileName}>{comment.profile.profileName}</Text> {comment.message}</Text>
    </View>
)

export default ({comments}) => (
    <Box style={{marginTop: 8}}>
        {comments && comments.map(Comment)}
    </Box>
)

const styles = StyleSheet.create({
    comment: {
        display: 'flex',
        flexDirection: 'row'
    },
    profileName: {
        fontWeight: 'bold',
    },
});
