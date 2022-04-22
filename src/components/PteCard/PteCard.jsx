import React from 'react'
import './pteCard.css'


const PteCard = ({PteImage, pteParagraph}) => {
    return (
        <div className="pte-card">
            <div className="pte-card-img">
                <img src={PteImage} alt="pte"/>

            </div>
            <div className="pte-card-text">
                <p>{pteParagraph}</p>

            </div>
            
        </div>
    )
}

export default PteCard
