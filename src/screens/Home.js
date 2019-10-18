import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import StoryThumb from '../components/StoryThumb';
import fakeData from '../mocks/fakeData';

export default () => (
    <SafeAreaView>
        <Header />
        <ScrollView horizontal>
            {
                fakeData.stories.map(story => (
                    <StoryThumb imageUrl={story.imageUrl} profileName={story.profileName} />
                ))
            }
        </ScrollView>
    </SafeAreaView>
);
