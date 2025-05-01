import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import AuthLayout from './components/AuthLayout';
import Signup from './pages/SignupScreen';
import Login from './pages/LoginScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route 
          path="/register" 
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          } 
        />
        <Route 
          path="/login" 
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;