import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Stickers from './components/Stickers';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import MenuPage from './pages/MenuPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Stickers />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
