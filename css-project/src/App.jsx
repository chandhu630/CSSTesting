import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Materials from './components/Materials/Materials';
import About from './components/About/About';
import Product from './components/Products/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar should be outside Routes */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/hello' element={<Contact />}/>
          <Route path='/materials' element={<Materials />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Product/>}/>

          {/* Add more pages here */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
