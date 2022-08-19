import { Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} />
    </Routes>
  )
}

export default AppRouter;