import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Home from '../components/Home/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
