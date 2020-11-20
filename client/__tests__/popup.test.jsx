import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Popup from '../components/popup';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for Popup component', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<Popup />);
  })

  it('it dynamically renders checkIn value as placeholder', () => {
    const wrapper = shallow(<Popup checkIn={'Check In'}/>);
    expect(wrapper.find('.form').at(0).props().placeholder).toEqual('Check In')
  })

  it('it dynamically renders checkOut value', () => {
    const wrapper = shallow(<Popup checkOut={'Check Out'}/>);
    expect(wrapper.find('#checkout').text()).toBe('Check Out')
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Popup />);
    expect(wrapper).toMatchSnapshot();
  })

})