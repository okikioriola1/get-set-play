import React from 'react'
import './infoCard.css'


const InfoCard = ({header,paragraph,InfoImage}) => {
    return (
        <div className="info-card">
            <div className="info-image-part">
                <img src={InfoImage} className="info-img" alt=""/>

            </div>
            <div className="info-text">
                <h1>{header}</h1>
                <p>{paragraph}</p>
            </div>
            
        </div>
    )
}

export default InfoCard
