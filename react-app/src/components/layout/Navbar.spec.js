import React from 'react';
import {shallow} from 'enzyme';
import Navbar from './Navbar';

describe('Navbar Component', () => {

    it('It should render without error', () => {
        const component = shallow(<Navbar />);
        const wrapper = component.find('.nav-wrapper');
        expect(wrapper.length).toBe(1);
    });
});