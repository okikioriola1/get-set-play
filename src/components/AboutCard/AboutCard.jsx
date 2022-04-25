import React from 'react'
import './aboutCard.css'


const AboutCard = ({aboutImage, headerText, paragraph, up, font}) => {
    return (
        <div className="about-card">
            <div className={`${up? 'rotate' : 'rotate-inverse'} image-part `}>
                <img src={aboutImage} className="about-card-img" alt="about"/>
            </div>
            <div className="blur-part"></div>
            <div className="card-text">
                <h1 className={font? 'highFont':'lowFont'}>{headerText}</h1>
                <p>{paragraph}.</p>
            </div>
            
        </div>
    )
}

export default AboutCard
