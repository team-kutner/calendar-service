import React from 'react';
import Enzyme, { shallow } from '../../enzyme.js';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app.jsx';

describe('Test suite for App component', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<App />);
  })

  it('should render only one button', () => {
    const wrapper = shallow(<App />);
    let button = wrapper.find('.mouse-cursor');
    expect(button).toBeDefined();
    expect(button).toHaveLength(1);
  })

  it('should render only one red star', () => {
    const wrapper = shallow(<App />);
    let star = wrapper.find('.red-star');
    expect(star).toBeDefined();
    expect(star).toHaveLength(1);
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

})