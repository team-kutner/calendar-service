import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Calendar from '../components/calendar';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for Calendar component', () => {
  it('it renders without crashing when passed prop', () => {
    const wrapper = shallow(<Calendar booked={['2020-11-25']} />);
  })

  it('on render, previous button should not be clickable', () => {
    const wrapper = shallow(<Calendar booked={['2020-11-25']}/>);
    expect(wrapper.find('#prev').exists()).toBeFalsy();
  })

  it('on next click, previous button should be clickable', () => {
    const wrapper = shallow(<Calendar booked={['2020-11-25']}/>);
    wrapper.find('#next').simulate('click');
    expect(wrapper.find('#prev').exists()).toBeTruthy();
  })

})
