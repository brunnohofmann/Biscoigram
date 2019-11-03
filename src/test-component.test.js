/**
 * @jest-environment jsdom
 */
import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import Box from './components/Box';


describe('Component tested with airbnb enzyme', () => {
    test('App mount with enzyme', () => {
        const wrapper = shallow(<Box />);

    });
});
