// src/App.js
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import OTPPage from './Components/OTPPage';
import './index.css'; // Make sure to import Tailwind CSS
const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Login</Link>
          </li>
          <li>
            <Link to="/otpvarification" className="text-white">OTPPage</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otpvarification" element={<OTPPage />} />
          {/* <Route path="/counter" element={<Counter />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
    
  );
  
};

export default App;
