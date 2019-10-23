import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Avatar from '../Avatar';

export default ({profile}) => (
    <View style={styles.container}>
        <Avatar uri={profile.imageUrl} size={4} />
        <Text>{profile.profileName}</Text>
    </View>
);

const styles = StyleSheet.create({
   container: {
       display: 'flex',

   },
});
