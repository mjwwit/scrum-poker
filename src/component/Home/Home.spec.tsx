import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';


describe('render home page', () => {
    it('should show a title', () => {
       const title = shallow(<Home/>)
       expect(title.contains(<h1>Welcome to the scrum poker app!</h1>)).toBeTruthy()
    });
    it('should show a button', () => {
        const button = shallow(<Home/>)
        expect(button.contains(<button>Create room</button>)).toBeTruthy()
    });
});
