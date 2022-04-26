import React,{useState}from 'react'
import './heroSection.css'
import HeroImage from '../../images/hero-controller.png'
import {AiFillLinkedin} from 'react-icons/ai'

import {FaTelegramPlane, FaInstagram} from 'react-icons/fa'
import {RiTwitterFill, RiDiscordFill} from 'react-icons/ri'
import HeroLeftImage from '../../images/left-circle-bg.png'
import {motion} from 'framer-motion'
import ContactModal from '../ContactModal/ContactModal'

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

    const FirstwordMotion = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
        },
      };
      const SecondwordMotion = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 2, duration: 1.5, ease: "easeInOut" },
        },
      };
      const ThirdwordMotion = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 3, duration: 1.5, ease: "easeInOut" },
        },
      };
    return (
        <div className="gsp__herosection">
            <div className="gsp__hero-left-side">
                <img src={HeroLeftImage} className="hero-left-side-img" alt="leftside"/>
                <div className="gsp__left-side-content">
                    <h1><motion.span variants={FirstwordMotion}
                    initial="hidden"
                    animate="visible" className="hero-get">GET</motion.span ><motion.span variants={SecondwordMotion}
                    initial="hidden"
                    animate="visible"  className="hero-set">SET</motion.span><motion.span variants={ThirdwordMotion}
                    initial="hidden"
                    animate="visible" className="hero-play">PLAY</motion.span></h1>
                    <p>A DAO-POWERED ESPORTS AND STREAMING METAVERSE</p>
                    <div className="hero-button">
                    <button onClick={()=>setShowModal(true)} whileHover={{scale:1.1}} className="gsp__hero-btn">CONTACT</button>
                    </div>
                    
                </div>

            </div>
            <div className="gsp__hero-right-side ">
                <img src={HeroImage} alt="hero" className="controller-img spin-img"/>

            </div>
            <div className="gsp__hero-icons">
                <div className="gsp__hero-icon-link">
                    <ul>
                    <li><a href="https://linkedin.com/company/arcader " className="hero-icon-link"><AiFillLinkedin/></a></li>
                    <li><a href="https://discord.com/invite/jHxU6tMMPE " className="hero-icon-link"><RiDiscordFill/></a></li>
                    <li><a href="https://mobile.twitter.com/getsetplay_io " className="hero-icon-link"><RiTwitterFill/></a></li>
                    <li><a href="https://t.me/getsetplayio " className="hero-icon-link"><FaTelegramPlane/></a></li>
                    
                    </ul>
                    
                </div>

            </div>

            {showModal &&(
              <ContactModal closeModal={()=>setShowModal(false)}/>
            )}


            
        </div>
    )
}

export default HeroSection
