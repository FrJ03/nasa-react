import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Initial commit</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
