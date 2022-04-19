import React from 'react'
import './roadMapCard.css'


const RoadMapCard = ({RoadMapImage}) => {
    return (
        <div className="road-map-card">
            <div className="road-map-image">
                <img src ={RoadMapImage} alt="road-map"/>

            </div>
            <div className="road-map-card-list">
                <ul>
                    <li><p>Seed and Private Backers and Partners Onboarding</p></li>
                    <li> <p>MVP- ArcArena P2P version - DAO based</p> </li> 
                    <li><p>IDO launch of ARD token</p></li>
                    <li><p>Launch of ARD Staking Pools - Vote Escrow distribution model</p></li>
                    </ul>
            </div>
            
        </div>
    )
}

export default RoadMapCard
