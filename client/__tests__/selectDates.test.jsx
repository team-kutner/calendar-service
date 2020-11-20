import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SelectDates from '../components/selectDates';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for selectDates component', () => {

  it('it renders without crashing', () => {
    const wrapper = shallow(<SelectDates />);
    expect(wrapper).toBeDefined();
  })

  it('checks that Popup is rendered checkin click', () => {
    const wrapper = shallow(<SelectDates />);
    expect(wrapper.find('Popup').exists()).toBeFalsy();
    wrapper.find('#in').simulate('click');
    expect(wrapper.find('Popup').exists()).toBeTruthy();
  })

  it('checks that Popup is rendered checkout click', () => {
    const wrapper = shallow(<SelectDates />);
    expect(wrapper.find('Popup').exists()).toBeFalsy();
    wrapper.find('#out').simulate('click');
    expect(wrapper.find('Popup').exists()).toBeTruthy();
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<SelectDates />);
    expect(wrapper).toMatchSnapshot();
  })

})

