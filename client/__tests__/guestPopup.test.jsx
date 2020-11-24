import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import GuestPopup from '../components/guestPopup';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test suite for GuestPopup component', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<GuestPopup />);
  })

  it('should render props guest limit', () => {
    const wrapper = shallow(<GuestPopup guests={7}/>);
    expect(wrapper.find('#limit').text()).toContain('7');
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<GuestPopup />);
    expect(wrapper).toMatchSnapshot();
  })

})