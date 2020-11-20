import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import GuestDetail from '../components/guestDetail';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for GuestDetail component', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<GuestDetail />);
  })

  it('should render props guest limit', () => {
    const wrapper = shallow(<GuestDetail guests={7}/>);
    expect(wrapper.find('#limit').text()).toContain('7');
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<GuestDetail />);
    expect(wrapper).toMatchSnapshot();
  })

})