import React, { useState } from 'react';

import Layout from './components/Layout';
import Title from './components/Title';
import Button from './components/Button';
import { ButtonSize, ButtonVariant } from './components/Button/Button';
import BookList from './components/BookList';
import { IBook } from './interfaces';

import theHitchhikersGuideToTheGalaxyCover from './assets/covers/the-hitchhikers-guide-to-the-galaxy.jpg';
import scytheCover from './assets/covers/scythe.jpg';
import theInhabitedIslandCover from './assets/covers/the-inhabited-island.jpg';
import theBookThiefCover from './assets/covers/the-book-thief.jpg';
import oneFlewOverTheCuckoosNestCover from './assets/covers/one-flew-over-the-cuckoos-nest.jpg';
import toKillMockingbirdCover from './assets/covers/to-kill-mockingbird.jpg';
import theHungerGamesCover from './assets/covers/the-hunger-games.jpg';
import redRisingCover from './assets/covers/red-rising.jpg';
import the5thWaveCover from './assets/covers/the-5th-wave.jpg';
import queensGambitCover from './assets/covers/queens-gambit.jpg';
import playerPianoCover from './assets/covers/player-piano.jpg';
import diaryCover from './assets/covers/diary.jpg';
import chaosWalking from './assets/covers/chaos-walking.jpg';
import theThreeBodyProblem from './assets/covers/the-three-body-problem.jpg';

const PAGINATION_INITIAL_VALUE = 3;

const App: React.FC = () => {
  const [pagination, setPagination] = useState<number>(PAGINATION_INITIAL_VALUE);

  const books: Array<IBook> = [
    {
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      cover: theHitchhikersGuideToTheGalaxyCover,
      link: 'https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy'
    },
    {
      title: 'Scythe',
      author: 'Neal Shusterman',
      cover: scytheCover,
      link: 'https://www.goodreads.com/book/show/28954189-scythe'
    },
    {
      title: 'The Inhabited Island',
      author: 'Arkady Strugatsky, Boris Strugatsky',
      cover: theInhabitedIslandCover,
      link: 'https://www.goodreads.com/book/show/24922277-the-inhabited-island'
    },
    {
      title: 'The Book Thief',
      author: 'Markus Zusak',
      cover: theBookThiefCover,
      link: 'https://www.goodreads.com/book/show/19063.The_Book_Thief'
    },
    {
      title: 'One Flew Over the Cuckoo\'s',
      author: 'Ken Kesey',
      cover: oneFlewOverTheCuckoosNestCover,
      link: 'https://www.goodreads.com/book/show/332613.One_Flew_Over_the_Cuckoo_s_Nest'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover: toKillMockingbirdCover,
      link: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird'
    },
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      cover: theHungerGamesCover,
      link: 'https://www.goodreads.com/book/show/2767052-the-hunger-games'
    },
    {
      title: 'Red Rising',
      author: 'Pierce Brown',
      cover: redRisingCover,
      link: 'https://www.goodreads.com/book/show/15839976-red-rising'
    },
    {
      title: 'The 5th Wave',
      author: 'Rick Yancey',
      cover: the5thWaveCover,
      link: 'https://www.goodreads.com/book/show/16101128-the-5th-wave'
    },
    {
      title: 'The Queen\'s Gambit',
      author: 'queensGambitCover',
      cover: queensGambitCover,
      link: 'https://www.goodreads.com/book/show/55892954-the-queen-s-gambit'
    },
    {
      title: 'Player Piano',
      author: 'Kurt Vonnegut',
      cover: playerPianoCover,
      link: 'https://www.goodreads.com/book/show/9597.Player_Piano'
    },
    {
      title: 'Diary',
      author: 'Chuck Palahniuk',
      cover: diaryCover,
      link: 'https://www.goodreads.com/book/show/22284.Diary'
    },
    {
      title: 'Chaos Walking (series)',
      author: 'Patrick Ness',
      cover: chaosWalking,
      link: 'https://www.goodreads.com/series/44939-chaos-walking'
    },
    {
      title: 'The Three-Body Problem',
      author: 'Liu Cixin',
      cover: theThreeBodyProblem,
      link: 'https://www.goodreads.com/book/show/20518872-the-three-body-problem'
    }
  ];

  const showMoreBooks = (): void => {
    setPagination(pagination + PAGINATION_INITIAL_VALUE);
  };

  return (
    <Layout>
      <Title>Books</Title>
      <p className='mb-6'>A list of fiction books that I absolutely love 💜</p>
      <BookList books={books.slice(0, pagination)} />
      {pagination < books.length && (
        <div className='has-text-centered mt-6'>
          <Button
            variant={ButtonVariant.INFO}
            onClick={showMoreBooks}
            size={ButtonSize.LARGE}>
            Show more
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default App;
