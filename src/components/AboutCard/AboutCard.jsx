import React from 'react'
import './aboutCard.css'
import Fade from 'react-reveal'


const AboutCard = ({aboutImage, headerText, paragraph, up, font}) => {
    return (
        <div className="about-card">
            <div className={`${up? 'rotate' : 'rotate-inverse'} image-part `}>
                <img src={aboutImage} className="about-card-img" alt="about"/>
            </div>
            <div className="blur-part"></div>
            <div className="card-text">
                <Fade left cascade={true}><h1 className={font? 'highFont':'lowFont'}>{headerText}</h1></Fade>
                <Fade left cascade={true}><p>{paragraph}.</p></Fade>
            </div>
            
        </div>
    )
}

export default AboutCard
