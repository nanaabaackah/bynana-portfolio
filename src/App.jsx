import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Reconstruction from './pages/projects/Reconstruction';
import Learn from './pages/projects/lms';
import Odoo from './pages/projects/Odoo';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      
      {!isHome && <Navbar />}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Subpages under /projects */}
            <Route path="/projects/lms" element={<Learn />} />
            <Route path="/projects/Odoo" element={<Odoo />} />
            <Route path="/projects/Reconstruction" element={<Reconstruction />} />
            
          </Routes>
        </main>

        {!isHome && <Footer />}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
export default App;
