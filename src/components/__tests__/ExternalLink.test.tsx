import React from 'react';
import renderer from 'react-test-renderer';

import ExternalLink from '../../components/ExternalLink';

describe('ExternalLink', () => {
  xit('renders correctly', () => {
    const tree = renderer
      .create(
        <ExternalLink
          href='https://goodreads.com'
          title='Goodreads'
        />
      )
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});
