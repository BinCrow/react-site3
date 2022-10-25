import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Youtube from './components/pages/Youtube';
import Movie from './components/pages/Movie';
import Portfolio from './components/pages/Portfolio';
import Reference from './components/pages/Reference';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>} />
        <Route path="/youtube" element={<Youtube/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/reference" element={<Reference/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
