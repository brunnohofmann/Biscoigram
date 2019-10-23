import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faCamera, faInbox,
} from '@fortawesome/free-solid-svg-icons';

export default () => (
    <View style={styles.container}>
        <FontAwesomeIcon icon={faCamera} size={20}/>
        <Text style={styles.title}>BiscoiGram</Text>
        <FontAwesomeIcon icon={faInbox} size={20}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 18,
    },
});
