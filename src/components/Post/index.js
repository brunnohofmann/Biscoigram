import React from 'react';
import { Image, View } from 'react-native';

import PostActions from './PostActions';
import PostComments from './PostSubtitle';
import PostHeader from './PostHeader';

export default ({ post }) => (
    <View>
        <PostHeader post={post} />
        <Image source={{uri: post.uri}} style={{height:350, marginTop: 8}}  />
        <PostActions />
        <PostComments comments={post.comments} />
    </View>
);
