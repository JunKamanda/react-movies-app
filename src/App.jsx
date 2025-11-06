import React from 'react';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

const App = () => {
  return (
    <div>
      <h1>React Movies - connect to vercel</h1>
      <Home/>
      <Favorite/>
    </div>
  );
};

export default App;