import React, { Suspense } from 'react';
import './App.css';
import CanvasBackground from './components/CanvasBackground';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Header = React.lazy(() => import('./container/Header/Header'));
const About = React.lazy(() => import('./container/About/About'));
const Work = React.lazy(() => import('./container/Work/Work'));
const SkillsSection = React.lazy(() => import('./container/Skills/Skills'));
const ContactForm = React.lazy(() => import('./container/Contact/Contact'));

function App() {
  return (
    <div className="app-container">
      <CanvasBackground />
      <div className="content-overlay">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Navbar />
          <Header />
          <About />
          <Work />
          <SkillsSection />
          <ContactForm/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;

