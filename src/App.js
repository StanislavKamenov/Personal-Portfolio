import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work/>
    </>
  );
}

export default App;
