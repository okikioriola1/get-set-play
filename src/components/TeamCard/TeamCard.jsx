import React from 'react'
import './teamCard.css'

import TeamLinkedin from '../../images/team-card-linkedin.svg'



const TeamCard = ({ProfileImage, profileHeader, profilePosition, memberDescription}) => {
    return (
        <div className="team-card">
            <div className="team-linkedin">
                <div className="team-linkedin-icon">
                <img src={TeamLinkedin} alt="linkedin"/>
                </div>


            </div>
            <div className="team-member-img">
                <div className="team-image">
                <img src={ProfileImage} alt="member"/>
                </div>
            </div>
            <div className="team-member-profile">
                <h1>{profileHeader}</h1>
                <p>{profilePosition}</p>

            </div>
            <div className="rectangular-bar"> </div>
            <div className="about-member">
                <p>{memberDescription}</p>

            </div>
            <div className="team-card-btns">
                <button>BBDO</button>
                <button>bet365</button>

            </div>

            
        </div>
    )
}

export default TeamCard
