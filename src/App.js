import {useState, useEffect} from 'react'
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
import RoadMap from './components/RoadMap/RoadMap';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

useEffect(() => {
  setTimeout(()=>setIsLoaded(true), 2000)
    
}, []);

useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
    }
}, [isLoaded]);
  return (
    <div className="App">
    {
    isPageLoaded ?(
      <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Token/>
      <InfoSection/>
      <PlayToEarn/>
      <RoadMap/>
      <TeamMembers/>
      <Advisor/>
      <Footer/>
      </>
      ):(<Loader/>)

  }
      </div>
  );
}

export default App;
