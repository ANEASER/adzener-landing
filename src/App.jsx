import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';

export default function App() {
  return (
      <Router>
        <Routes>

          <Route index element={<Home />} />
             
        </Routes>
      </Router>
  );
}
