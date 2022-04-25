import React from 'react'
import TeamCard from '../TeamCard/TeamCard'

import './advisor.css'

import Michelle from '../../images/Michelle.png'
import Rouchelle from '../../images/Rouchelle.png'
import Shermen from '../../images/Shermen.png'
import Cassal from '../../images/Cassal.png'
import AdvisorBottomImg from '../../images/advisor-bottom-img.svg'

const Advisor = () => {
    return (
        <div className="advisor-section">
            <div className="advisor-content">
                <div className="advisor-header">
                    <h1>ADVISORS</h1>
                </div>
            <div className="advisor-cards">
            <TeamCard ProfileImage={Michelle} profileHeader={"MICHELLE JANICE"} profilePosition={"FOUNDER - CEO"} memberDescription={"Senior Art Director with over 10+ years of experience who has spearheaded fortune 500 projects valued at over $200 million. Has worked with some of the largest gaming, betting and entertainment  giants helping them strategically position products for optimization. Has 100% success rate in increasing user base and utility of platforms."}/>
        </div>
            </div>
            <div className="advisor-bottom-img">
                <img src={AdvisorBottomImg} alt="advisor"/>
            </div>
            
        </div>
    )
}

export default Advisor
