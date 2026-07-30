import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar           from './components/Navbar';
import Footer           from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen    from './components/LoadingScreen';
import Home             from './pages/Home';
import About            from './pages/About';
import Skills           from './pages/Skills';
import Projects         from './pages/Projects';
import Certifications   from './pages/Certifications';
import Contact          from './pages/Contact';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<About />} />
        <Route path="/skills"         element={<Skills />} />
        <Route path="/projects"       element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact"        element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ParticleBackground />
          <Navbar />
          <main style={{ paddingTop: '72px' }}>
            <AnimatedRoutes />
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
