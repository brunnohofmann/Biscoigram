import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';
import StoryThumb from '../components/StoryThumb';
import fakeData from '../mocks/fakeData';
import Box from '../components/Box';

export default () => (
    <SafeAreaView>
        <Header />
        <ScrollView style={{marginBottom: 30}}>
        <Box style={styles.stories}>
            <ScrollView horizontal>
                {
                    fakeData.stories.map(story => (
                        <StoryThumb key={story.profile.imageUrl} imageUrl={story.profile.imageUrl} profileName={story.profile.profileName} />
                    ))
                }
            </ScrollView>
        </Box>
            {
                fakeData.posts.map(post => (
                    <Post key={post.profile.imageUrl} post={post} />
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
    },
    posts: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: '#ececec',
    },
});
