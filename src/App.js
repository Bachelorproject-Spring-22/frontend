import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './helpers/AuthContext';
import TestComponent from './components/TestComponent/TestComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<TestComponent />} path='/' exact />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
