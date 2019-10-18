import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faCamera, faHome, faInbox,
} from '@fortawesome/free-solid-svg-icons';

export default () => (
    <View style={styles.container}>
        <FontAwesomeIcon icon={faHome} size={20} />
        <Text style={styles.title}>BiscoiGram</Text>
        <FontAwesomeIcon icon={faInbox} size={20} />

    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5
    },
    title : {
        fontSize: 16
    }
})
