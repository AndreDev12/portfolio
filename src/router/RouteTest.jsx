import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Header/Home';

const RouteTest = () => {
  return (
    <Router>
        <Routes>
            <Route 
                path='/'
                element={<Home />} 
            />
        </Routes>
    </Router>
  )
}

export default RouteTest;