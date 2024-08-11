import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FlashcardsPage from './pages/FlashcardsPage';
import AdminPage from './pages/AdminPage';
import Login from './components/Login';
import jwtDecode from 'jwt-decode';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/flashcards" element={isAuthenticated ? <FlashcardsPage /> : <Navigate to="/" />} />
        <Route path="/admin" element={isAuthenticated ? <AdminPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
