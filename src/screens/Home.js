import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';
import StoryThumb from '../components/StoryThumb';
import fakeData from '../mocks/fakeData';
import Box from '../components/Box';

export default () => (
    <SafeAreaView>
        <Header/>
        <ScrollView style={styles.stories} horizontal showsHorizontalScrollIndicator={false}>
            {
                fakeData.stories.map(story => (
                    <StoryThumb key={story.profile.imageUrl} imageUrl={story.profile.imageUrl} profile={story.profile}/>
                ))
            }
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    stories: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: '#ececec',
        paddingHorizontal: 8
    },
});
