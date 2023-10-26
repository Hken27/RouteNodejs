import About from './pages/about';
import Contack from './pages/contact';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route
          path="/About
        "
          element={<About />}
        />{' '}
        <Route path=" / Contack " element={<Contack />} />{' '}
      </Routes>{' '}
    </Router>
  );
};

export default App;
