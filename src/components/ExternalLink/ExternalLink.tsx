import React from 'react';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface ExternalLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
  href: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ title, href, ...restProps }: ExternalLinkProps) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...restProps}>
      {title}
    </a>
  );
};

export default ExternalLink;
