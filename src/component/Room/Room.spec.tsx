import { shallow } from 'enzyme';
import * as React from 'react';
import Room from './Room';
import {postResponse} from '../../util/api'


describe('should show a room', () => {
    it('should have an inputfield for name', () => {
        const wrapper = shallow(<Room/>)
        expect(wrapper.find('.name').exists()).toEqual(true)
    });
    it('should have an radio button for regular', () => {
        const wrapper = shallow(<Room />)
        expect(wrapper.find('.regular').exists()).toEqual(true)
    });
    it('should have an radio button for fibonnaci', () => {
        const wrapper = shallow(<Room/>)
        expect(wrapper.find('.fibonacci').exists()).toEqual(true)
    });
    it('should have a radio button for custom', () => {
        const wrapper = shallow(<Room/>)
        expect(wrapper.find('.custom').exists()).toEqual(true)
    });
    it('should have an inputfield for custom', () => {
        const wrapper = shallow(<Room/>)
        expect (wrapper.find('.custom').exists()).toEqual(true)
    });
    it('have an inputfield for timeout', () => {
        const wrapper = shallow(<Room/>)
        expect(wrapper.find('.timeout').exists()).toEqual(true)
    });
    it('should have an inputfield for custom that is visible when the custom radio button is clicked', () => {
        const wrapper = shallow(<Room/>)
     expect(wrapper.getElements()).toMatchSnapshot();
    });
});

describe('should send a room after clicking create room', () => {
    it('should click create room button', () => {
        window.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({name: 'test', cardScheme:'fibonacci', timeout: 0 })
          })
        
        const wrapper = shallow(<Room />);

        expect(wrapper.find('button').exists()).toEqual(true);
        wrapper.find('button').simulate('click');  
        expect(window.fetch).toHaveBeenCalledTimes(1)
    });
    it('should send a room', async () => {
        window.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({name: 'scrum', cardScheme:'regular', timeout: 0 })
          })

          const mockRoom = {name: 'scrum', cardScheme:'fibonacci', timeout: 0 }
 
       await postResponse('http://localhost:3000', mockRoom).then(res =>{    
       // expect(res).toEqual({status:"OK"})
        expect(window.fetch).toBeCalledWith("http://localhost:3000", {"body": "{\"name\":\"scrum\",\"cardScheme\":\"fibonacci\",\"timeout\":0}", "headers": {"Content-Type": "application/json;charset=utf-8", "Origin": "http://localhost:3000"}, "method": "POST"})
       })
    });
});
