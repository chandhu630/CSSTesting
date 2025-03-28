import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar should be outside Routes */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Add more pages here */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
