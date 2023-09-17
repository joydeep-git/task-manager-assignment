import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Registration from './Components/Pages/Registration';
import Navbar from './Components/Helpers/Navbar';
import ChangePassword from './Components/Helpers/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/changepassword' element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;