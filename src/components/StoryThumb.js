import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default ({imageUrl, profileName}) => (
    <View style={styles.view}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <Text style={styles.text}>{profileName}</Text>
    </View>
);

const styles = StyleSheet.create({
   image: {
       borderColor: 'purple',
       borderRadius: 50,
       borderWidth: 2.5,
       marginHorizontal: 8,
       minHeight: 64,
       minWidth: 64,
   },
   text: {
       fontSize: 11,
       paddingVertical: 4
   },
   view: {
       alignItems: "center",
       display: "flex",
       marginTop: 8
   }
});
