import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CareerOption from './components/CareerOption';
import JavaDetails from './components/JavaDetails';
import PythonDetails from './components/PythonDetails';
import CppDetails from './components/CPlusPlusDetails';
import VLSIDetails from './components/VLSIDetails';
import EmbeddedDetails from './components/EmbeddedDetails';
import MernDetails from './components/MERNDetails';
import MeanDetails from './components/MEANDetails';
import HtmlDetails from './components/HTMLDetails';
import CssDetails from './components/CSSDetails';
import JavascriptDetails from './components/JavaScriptDetails';

import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

// Images
import javaImg from './images/java.png';
import pythonImg from './images/python.jpeg';
import cppImg from './images/c.jpeg';
import vlsiImg from './images/vlsi.jpeg';
import embeddedImg from './images/embedded.jpeg';
import mernImg from './images/mern.jpeg';
import meanImg from './images/mean.jpeg';
import htmlImg from './images/html.jpeg';
import cssImg from './images/css.jpeg';
import javascriptImg from './images/js.jpeg';

import './App.css';

// ProtectedRoute: only allows access if logged in
const ProtectedRoute = ({ currentUser, children }) => {
  return currentUser ? children : <Navigate to="/" />;
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    setCurrentUser(newUser); // auto-login
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const careerOptions = [
    { name: 'Java', img: javaImg, path: '/java-details' },
    { name: 'Python', img: pythonImg, path: '/python-details' },
    { name: 'C', img: cppImg, path: '/cpp-details' },
    { name: 'VLSI', img: vlsiImg, path: '/vlsi-details' },
    { name: 'Embedded', img: embeddedImg, path: '/embedded-details' },
    { name: 'MERN', img: mernImg, path: '/mern-details' },
    { name: 'MEAN', img: meanImg, path: '/mean-details' },
    { name: 'HTML', img: htmlImg, path: '/html-details' },
    { name: 'CSS', img: cssImg, path: '/css-details' },
    { name: 'JavaScript', img: javascriptImg, path: '/javascript-details' },
  ];

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Home route: login/signup or career grid */}
          <Route
            path="/"
            element={
              !currentUser ? (
                <div className="auth-card">
                  {showSignup ? (
                    <Signup onSignup={handleSignup} />
                  ) : (
                    <Login onLogin={handleLogin} users={users} />
                  )}
                  <button
                    className="toggle-btn"
                    onClick={() => setShowSignup(!showSignup)}
                  >
                    {showSignup
                      ? 'Already have an account? Login'
                      : 'New user? Sign Up'}
                  </button>
                </div>
              ) : (
                <div className="career-grid">
                  {careerOptions.map((option) => (
                    <CareerOption
                      key={option.name}
                      name={option.name}
                      imgSrc={option.img}
                      path={option.path}
                    />
                  ))}
                </div>
              )
            }
          />

          {/* Detail pages: full-page view */}
          <Route
            path="/java-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <JavaDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/python-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <PythonDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cpp-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <CppDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vlsi-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <VLSIDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/embedded-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <EmbeddedDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mern-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <MernDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mean-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <MeanDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/html-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <HtmlDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/css-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <CssDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/javascript-details"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <JavascriptDetails />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
