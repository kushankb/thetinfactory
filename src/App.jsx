import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Why from './pages/Why.jsx';
import How from './pages/How.jsx';
import What from './pages/What.jsx';
import Who from './pages/Who.jsx';
import Contact from './pages/Contact.jsx';

const titles = {
  '/': 'The Tin Factory',
  '/the-why': 'The Tin Factory — Why use custom sustainable tin packaging',
  '/the-how': 'The Tin Factory — How to order sustainable custom tin packaging',
  '/the-what': 'The Tin Factory — Our services: sustainable tin packaging for the circular economy',
  '/the-who': 'The Tin Factory — A family-owned business in Vancouver and Delhi',
  '/contact_us': 'The Tin Factory — Contact us',
};

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] || titles['/'];
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to Content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-why" element={<Why />} />
          <Route path="/the-how" element={<How />} />
          <Route path="/the-what" element={<What />} />
          <Route path="/the-who" element={<Who />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
