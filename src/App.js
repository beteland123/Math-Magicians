import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quate from './components/Quot';
import Home from './components/Homepage';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quate />} />
      </Routes>
    </>
  );
}

export default App;
