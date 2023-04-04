import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import { Box } from '@mui/material';
import {Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcersiceDetail';
import BmiCalculator from './pages/BmiCalculator';
import Login from './pages/login/Login';
import Tracker from './pages/tracker/Tracker';

const App = () => {
  return (
    <Box width="400px" sx={ {width: { xl: '1488px'} } } m="auto">
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExcerciseDetail />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Tracker" element={<Tracker />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;