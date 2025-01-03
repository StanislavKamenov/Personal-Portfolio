import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Header = React.lazy(() => import('./container/Header/Header'));
const About = React.lazy(() => import('./container/About/About'));
const Work = React.lazy(() => import('./container/Work/Work'));
const SkillsSection = React.lazy(() => import('./container/Skills/Skills'));
const ContactForm = React.lazy(() => import('./container/Contact/Contact'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <SkillsSection />
      <ContactForm/>
    </Suspense>
  );
}

export default App;
