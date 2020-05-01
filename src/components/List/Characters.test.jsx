import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

const characters = [
  {
   
    name: 'Ang',
    image: 'url'
  }
];

describe('Characters', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
