import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Box from './Box';
Icon.loadFont();

export default () => (
    <Box style={styles.container}>
        <Icon name="camera" size={20} />
        <Text style={styles.title}>BiscoiGram</Text>
        <Icon name="inbox" size={20} />
    </Box>
);

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    title: {
        fontSize: 18,
    },
});
