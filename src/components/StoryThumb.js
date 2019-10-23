import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Avatar from './Avatar';

export default ({imageUrl, profileName}) => (
    <View style={styles.view}>
        <Avatar uri={imageUrl} />
        <Text style={styles.text}>{profileName}</Text>
    </View>
);

const styles = StyleSheet.create({
   text: {
       fontSize: 11,
       paddingVertical: 4
   },
   view: {
       alignItems: "center",
       display: "flex",
       marginTop: 8,
       marginRight: 8
   }
});
