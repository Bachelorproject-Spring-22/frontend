import { useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './helpers/AuthContext';
import Login from './components/login/Login';
import TestComponent from './components/TestComponent/TestComponent';
import './app.css';
import Logout from './components/login/Logout';
import { getter } from './api/apiCalls';
//import NavBar from './components/Navbar/Navbar';

function App() {
  useEffect(() => {
    let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
    if (authTokens) {
      getter();
    }
  })

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<TestComponent />} path='/' exact />
            <Route element={<Login />} path="/login" exact />
            <Route element={<Logout />} path="/logout" exact />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
