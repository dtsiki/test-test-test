import React, { ReactNode } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalLink from '../ExternalLink';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <header className='has-background-light pt-4 pb-4'>
        <div className='container'>
          <div className='is-flex'>
            <div className='has-text-link mr-2'>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <ExternalLink
              title='dtsiki'
              href='https://dtsiki.github.io/'
            />
          </div>
        </div>
      </header>
      <div className='container mt-6 mb-6'>{children}</div>
      <footer className='has-background-light mt-6 pt-6 pb-6'>
        <div className='container'>
          <div className='mb-2 is-flex is-align-items-center'>
            <p className='pr-4'>This project is a boilerplate for testing React with Jest</p>
            <ExternalLink
              className='button'
              title='Read article'
              href='https://dtsiki.github.io/blog/keep-calm-and-test'
            />
          </div>
          <p className='has-text-grey-light'>
            Designed using{' '}
            <ExternalLink
              title='Bulma'
              href='https://bulma.io/'
            />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
