import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Portfolio from '../components/Portfolio/Portfolio';

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
  )
}

export default AppRouter;