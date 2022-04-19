
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Token from './components/Token/Token';
import InfoSection from './components/InfoSection/InfoSection';
import PlayToEarn from './components/PlayToEarn/PlayToEarn';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Advisor from './components/Advisor/Advisor';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Token/>
      <InfoSection/>
      <PlayToEarn/>
      <TeamMembers/>
      <Advisor/>
      <Footer/>
    </div>
  );
}

export default App;
