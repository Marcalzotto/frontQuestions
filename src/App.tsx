import React from 'react';

import "./App.module.scss";

import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Approver from './pages/Approver';
import Home from './pages/Home';
import Answers from './pages/Answers';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/approver' element={<Approver />} />
        <Route path='/answers' element={<Answers />} />
      </Routes>
    </Router>
    
  );
}

export default App;