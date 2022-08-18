import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default AppRouter;