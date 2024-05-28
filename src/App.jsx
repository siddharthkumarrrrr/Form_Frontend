import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Dashboard from './components/Dashbord';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/protected-page" component={Dashboard} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
 