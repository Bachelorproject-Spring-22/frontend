import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './helpers/AuthContext';
import Login from './components/login/Login';
import TestComponent from './components/TestComponent/TestComponent';
import './app.css';
//import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<TestComponent />} path='/' exact />
            <Route element={<Login />} path="/login" exact />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
