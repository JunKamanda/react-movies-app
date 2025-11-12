import React from 'react';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;