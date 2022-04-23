import React from 'react'
import './roadMapCard.css'


const RoadMapCard = ({RoadMapImage,p1,p2,p3,p4,p5}) => {
    return (
        <div className="road-map-card">
            <div className="road-map-image">
                <img src ={RoadMapImage} alt="road-map"/>

            </div>
            <div className="road-map-card-list">
                <ul>
                    <li><p>{p1}</p></li>
                    <li> <p>{p2}</p> </li> 
                    <li><p>{p3}</p></li>
                    <li><p>{p4}</p></li>
                    <li><p>{p5}</p></li>
                    </ul>
            </div>
            
        </div>
    )
}

export default RoadMapCard




