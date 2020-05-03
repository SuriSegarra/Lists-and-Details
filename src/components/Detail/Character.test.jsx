import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character 
      name="Arnold Shortman" 
      image="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333"/>);
    expect(wrapper).toMatchSnapshot();
  });
});