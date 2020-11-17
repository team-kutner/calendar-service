import React from 'react';
import Enzyme, { shallow } from '../enzyme.js';
import App from '../client/app.jsx';

describe('First React component test with Enzyme', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  })
})