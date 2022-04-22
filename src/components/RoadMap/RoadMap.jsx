import React from 'react'
import RoadMapCard from '../RoadMapCard/RoadMapCard'
import './roadMap.css'
import RoadMapQ1 from '../../images/road-map-q1.png'
import RoadMapQ2 from '../../images/road-map-q2.png'
import RoadMapQ3 from '../../images/road-map-q3.png'
import RoadMapQ4 from '../../images/road-map-q4.png'

const RoadMap = () => {
    return (
        <div className="road-map-section" id="roadmap">
            <div className="road-map-header">
                <h1>ROAD<span className="map">MAP</span></h1>
            </div>
            <div className="road-map-main">
                <div className="road-2022">
                    <div className="road-header">
                    <h1>2022</h1>
                    </div>
                <RoadMapCard RoadMapImage={RoadMapQ2}/>
                <RoadMapCard RoadMapImage={RoadMapQ3}/>
                <RoadMapCard RoadMapImage={RoadMapQ4}/>
                </div>
                <div className="road-2023">
                    <div className="road-header">
                    <h1>2023</h1>
                    </div>
                <RoadMapCard RoadMapImage={RoadMapQ1}/>
                <RoadMapCard RoadMapImage={RoadMapQ2}/>
                <RoadMapCard RoadMapImage={RoadMapQ3}/>

                </div>
            </div>
            
        </div>
    )
}

export default RoadMap
