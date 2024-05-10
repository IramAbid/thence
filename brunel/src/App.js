import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Success from './pages/success/success'
import Registration from './pages/register/register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">        
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />     
            <Route path="/register" element={<Registration />} /> 
            <Route path="/register/success" element={<Success />} /> 
          </Routes> 
        </header> 
      </div>
    </Router>
  );
}

export default App;
