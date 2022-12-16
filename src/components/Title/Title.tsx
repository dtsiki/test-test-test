import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }: TitleProps) => {
  return <h1 className='title is-size-1'>{children}</h1>;
};

export default Title;
