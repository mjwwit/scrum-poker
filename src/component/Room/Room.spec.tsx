import { shallow } from 'enzyme';
import * as React from 'react';
import Room from './Room';


describe('should show a room', () => {
    it('should have an inputfield for name', () => {
        const wrapper = shallow(<Room/>)
        expect(wrapper.find('input').exists()).toEqual(true)
    });
});