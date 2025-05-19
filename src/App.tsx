import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/home';
import { ContactPage } from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
