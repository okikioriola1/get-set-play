import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import './about.css'
import AboutRightImage from '../../images/About-img-right.svg'
import AboutLeftImage from '../../images/About-img-left.svg'
import HeadsetImage from '../../images/headset.svg'
import VRHeadsetImage from '../../images/vrheadset.svg'
import Player from '../../images/player.svg'

const About = () => {
    return (
        <div className="gsp__aboutsection" id="about">
            <div className="right-img">
                <img  src ={AboutRightImage} alt ="right" className="right-side-image"/>
                </div>
                <div className="about-text-section">
            <div className="about-header">
                <h1>ABOUT <span className="getsetplay">GETSETPLAY</span></h1>
            </div>
            </div>
            
            
            <div className="about-cards">
            <AboutCard aboutImage={HeadsetImage} headerText={"FOR STREAMERS"} paragraph={"The world’s first exclusive gaming stream-2 -earn platform allowing free and fair monetisation of your gaming skills, for streamers and viewers alike."}/>
            <AboutCard aboutImage={Player} headerText={"FOR PLAYERS"} paragraph={"Next gen esports arena powered by an equitable matchmaking algorithm with various different game-play modes to make the best out of your experience: Solo, Party, Teams, and Pro-Seasons."}/>
            <AboutCard aboutImage={VRHeadsetImage} headerText={"AN IMMERSIVE EXPERIENCE COMING SOON"} paragraph={""}/>
            </div>
            <div className="left-img">
            <img  src ={AboutLeftImage} alt ="left" className="left-side-image"/>

            </div>
            
        </div>
    )
}

export default About
