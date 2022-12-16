import React from 'react';

import { IBook } from '../../interfaces';
import BookCard from '../BookCard';

interface BookListProps {
  books: Array<IBook>;
}

const BookList: React.FC<BookListProps> = ({ books }: BookListProps) => {
  return (
    <ul className='columns is-multiline'>
      {books.map((book: IBook) => (
        <li
          key={book.title}
          className='column  is-one-third'>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
