import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignupPage from './pages/signUpPage';
import Login from './pages/loginPage';

function App(): JSX.Element {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
