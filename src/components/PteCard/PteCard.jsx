import React from 'react'
import './pteCard.css'


const PteCard = ({PteImage, pteParagraph, fota}) => {
    return (
        <div className="pte-card">
            <div className="pte-card-img">
                <img src={PteImage} className ={`${fota? 'fota': null}`}alt="pte"/>

            </div>
            <div className="pte-card-text">
                <p>{pteParagraph}</p>

            </div>
            
        </div>
    )
}

export default PteCard
