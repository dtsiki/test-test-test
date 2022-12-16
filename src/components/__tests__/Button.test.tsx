import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import { ButtonVariant } from './../Button/Button';

const variants = Object.keys(ButtonVariant);

describe('Button', () => {
  test.each(variants)('renders %s correctly', (variant) => {
    const tree = renderer.create(<Button variant={variant as ButtonVariant}>Click me</Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});
