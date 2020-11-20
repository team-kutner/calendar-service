import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import GuestSelect from '../components/guestSelect';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for GuestSelect component', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<GuestSelect />);
  })

  it('should render GuestDetail component when clicked', () => {
    const wrapper = shallow(<GuestSelect />);
    expect(wrapper.find('GuestDetail').exists()).toBeFalsy();
    wrapper.find('.showGuestArrow').simulate('click');
    expect(wrapper.find('GuestDetail').exists()).toBeTruthy();
  })

  it('should de-render GuestDetail component when clicked', () => {
    const wrapper = shallow(<GuestSelect />);
    wrapper.find('.showGuestName').simulate('click');
    expect(wrapper.find('GuestDetail').exists()).toBeTruthy();
    wrapper.find('.hideGuestArrow').simulate('click');
    expect(wrapper.find('GuestDetail').exists()).toBeFalsy();
  })

})