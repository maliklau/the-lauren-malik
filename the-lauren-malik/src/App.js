import logo from './logo.svg';
import Menu from './components/Menu/Menu.js'
import TopNav from './components/TopNav/TopNav.js'
import Contact from './components/Contact/Contact.js'
import HomePage from './components/HomePage/HomePage.js'
import About from './components/About/About.js'
import Experience from './components/Experience/Experience.js'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.scss';

export default function App() {
  return (
    <Router>
      <div>
        <TopNav/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
      </div>
    </Router>
  );
}
