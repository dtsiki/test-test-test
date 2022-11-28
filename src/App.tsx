import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  const doSomething = (): void => {
    // TODO: Implement something
  };

  return (
    <div className='container is-fluid mt-6'>
      <h1 className='title is-1'>Wazzup 👋</h1>
      <p className='block'>This is a boilerplate for learning how to test React web-applications.</p>
      <Button onClick={doSomething}>Button</Button>
    </div>
  );
};

export default App;
