import React from 'react';
import {shallow} from 'enzyme';
import Box from './Box';


describe('Box.js test', () => {

    test('Should match with snapshot', () => {
        const boxShallow = shallow(<Box />);
        expect(boxShallow).toMatchSnapshot();
    });


    test('Should match with snapshot', () => {
        const boxShallow = shallow(<Box />);
        expect(boxShallow).toMatchSnapshot();
    });
});
