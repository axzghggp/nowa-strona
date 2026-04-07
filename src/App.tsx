import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o-mnie" element={<About />} />
          <Route path="oferta" element={<Services />} />
          <Route path="cennik" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
