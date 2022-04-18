import React from 'react'
import './heroSection.css'
import HeroImage from '../../images/hero-controller.png'
import InstagramIcon from '../../images/gsp-instagram.svg'
import {FaTelegramPlane} from 'react-icons/fa'
import {RiTwitterFill} from 'react-icons/ri'

const HeroSection = () => {
    return (
        <div className="gsp__herosection">
            <div className="gsp__hero-left-side">
                <div className="gsp__left-side-content">
                    <h1>GET<span className="set">SET</span><span className="play">PLAY</span></h1>
                    <p>A DAO-POWERED ESPORTS AND STREAMING METAVERSE</p>
                    <button className="gsp__hero-btn">Explore</button>
                </div>

            </div>
            <div className="gsp__hero-right-side">
                <img src={HeroImage} alt="hero" className="controller-img"/>

            </div>
            <div className="gsp__hero-icons">
                <div className="gsp__hero-icon-link">
                    <ul>
                    <li><a href="#home" className="hero-icon-link"><img src={InstagramIcon} className="instagram-icon" alt="instgram"/></a></li>
                    <li><a href="#home" className="hero-icon-link"><FaTelegramPlane/></a></li>
                    <li><a href="#home" className="hero-icon-link"><RiTwitterFill/></a></li>
                    <li><a href="#home" className="hero-icon-link"><RiTwitterFill/></a></li>
                    </ul>
                    
                </div>

            </div>


            
        </div>
    )
}

export default HeroSection
