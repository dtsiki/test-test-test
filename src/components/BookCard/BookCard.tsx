import React from 'react';

import ExternalLink from '../ExternalLink';
import { IBook } from './../../interfaces';

interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }: BookCardProps) => {
  const { title, author, cover, link } = book;

  return (
    <div className='card'>
      {book.cover && (
        <div className='card-image'>
          <figure className='image is-2by3'>
            <img
              src={cover}
              alt={`${title} book by ${author} cover`}
            />
          </figure>
        </div>
      )}
      <div className='card-content'>
        <div className='content'>
          <h2 className='title is-size-5 mt-3 mb-0 has-text-dark'>{title}</h2>
          <h3 className='title is-size-6 mt-2 has-text-grey'>by {author}</h3>
        </div>
      </div>
      {book.link && (
        <footer className='card-footer'>
          <p className='card-footer-item'>
            <span>
              View on{' '}
              <ExternalLink
                href={link}
                title='Goodreads'
              />
            </span>
          </p>
        </footer>
      )}
    </div>
  );
};

export default BookCard;
