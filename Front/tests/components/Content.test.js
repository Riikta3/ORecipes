import React from 'react';
import { shallow } from 'enzyme';

import Content from 'src/components/Content';
import Card from 'src/components/Card';

import recipes from 'src/data';

describe('<Content />', () => {
  const wrapper = shallow(
    <Content title="Test" text="Hello World" recipes={recipes} />
  );

  it('should have a title', () => {
    expect(wrapper.find('.content-title'))
      .toHaveLength(1);
  });

  it('should have a text content', () => {
    expect(wrapper.find('.content-text'))
      .toHaveLength(1);
  });

  it('should have as many Cards as recipes', () => {
    expect(wrapper.find(Card)).toHaveLength(recipes.length);
  });

  it('should not display any Cards if no recipes were given', () => {
    const wrapperWithoutRecipes =
      shallow(<Content title="Test" text="Hello World" />);

    expect(wrapperWithoutRecipes.find(Card)).toHaveLength(0);
  });
});
