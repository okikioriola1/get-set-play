import React, {useState} from 'react'
import './roadMapCard.css'
import Fade from 'react-reveal'


const RoadMapCard = ({RoadMapImage,p1,p2,p3,p4,p5,fourthLi, LastLi}) => {
    // const [fourthLi, setFourthLi]=useState(false);
    // const  [LastLi, setLastLi]=useState(false);
    // const fourth =()=>{
    //     setFourthLi(true)
    // }
    // const last =()=>{
    //     setLastLi(true)
    // }
    return (
        <div className="road-map-card">
            <Fade left cascade={true}>
            <div className="road-map-image">
                <img src ={RoadMapImage} alt="road-map"/>

            </div>
            </Fade>
            <div className="road-map-card-list">
            <Fade right delay={2000} wait={3000} cascade={true}>
                <ul>
                    <li><p>{p1}</p></li>
                    <li> <p>{p2}</p> </li> 
                    <li><p>{p3}</p></li>

                    {fourthLi && (<li><p>{p4}</p></li>)}
                   {LastLi &&(<li><p>{p5}</p></li>)} 
                    </ul>
                    </Fade>
            </div>
            
        </div>
    )
}

export default RoadMapCard




