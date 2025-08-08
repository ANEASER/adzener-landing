import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';

export default function App() {
  return (
    <Router basename="/adzener-landing">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}
