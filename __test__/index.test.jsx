import React from 'react';
import Enzyme, { shallow } from './enzyme.js';
import App from './client/index.jsx';

describe('First React component test with Enzyme', () => {
  it('it renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // console.log('true');
    // ReactDOM.unmountComponentAtNode(div);

    const wrapper = shallow(<App />);
    const text = wrapper.find('div div');
    expect(text).toBeDefined();
});