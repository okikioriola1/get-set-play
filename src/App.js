
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
    </div>
  );
}

export default App;
