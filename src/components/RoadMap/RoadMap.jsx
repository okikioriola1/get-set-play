import React from 'react'
import RoadMapCard from '../RoadMapCard/RoadMapCard'
import './roadMap.css'
import RoadMapQ1 from '../../images/road-map-q1.png'
import RoadMapQ2 from '../../images/road-map-q2.png'
import RoadMapQ3 from '../../images/road-map-q3.png'
import RoadMapQ4 from '../../images/road-map-q4.png'
import Fade from 'react-reveal'

const RoadMap = () => {
    return (
        <div className="road-map-section" id="roadmap">
            <div className="road-map-header">
                <h1>ROAD<span className="map">MAP</span></h1>
            </div>
            <div className="road-map-main">
                <div className="road-2022">
                    <Fade left cascade={true}>
                    <div className="road-header">
                    <h1>2022</h1>
                    </div>
                <RoadMapCard RoadMapImage={RoadMapQ2} p1={"Seed and Private Backers and Partners Onboarding"} p2={"MVP- ArcArena P2P version - DAO based"} p3={"IDO launch of ARD token"} fourthLi={true} p4={"Launch of ARD Staking Pools - Vote Escrow distribution model"} LastLi={false}/>
                <RoadMapCard RoadMapImage={RoadMapQ3} p1={"CEX listing and ARD token"} p2={"Launch DAO app and snapshot spaces"} p3={"Arc tournament(testnet)"} fourthLi={true} p4={"Audit of arcarena smart contracts"} LastLi={true }p5={"Testnet launch-ArcArenav1-Dao based"}/>
                <RoadMapCard RoadMapImage={RoadMapQ4} p1={"Mainnet launch-ArcArenav1-Dao based"} p2={"Add support to top three games and 10 match templates on ArcArena "} p3={"Referral program for esports, teams, streamers, high stakes bettors, influencers, etc"} fourthLi ={true} p4={"Testnet launch-arcstreams dapp-P2P streaming with light-nodes"} LastLi={false}/>
                </Fade>
                </div>
                <div className="road-2023">
                    <Fade right cascade={true} wait={3000}>
                    <div className="road-header">
                    <h1>2023</h1>
                    </div>
                <RoadMapCard RoadMapImage={RoadMapQ1} p1={"Mainnet launch-arcstreams dapp-P2P streaming with light-nodes"} p2={"Integration with top 3 distribution partners-in-game match oracles "} p3={"Onboarding top 10 popular games, 50 popular stramers/esport tema"} fourthLi={true} p4={"ARD token buy back and burn program"} LastLi={false} />
                <RoadMapCard RoadMapImage={RoadMapQ2} p1={"Launch arcarena v2-with automated in-game decision making"} p2={"Launch protocol revenue tracking dashboard"} p3={"Launch pr campaign for arcader ecosystem apps"} fourthLi={true} p4={"Launch bookmaking program to boost liquidity on betting tools"} LastLi={false} />
                <RoadMapCard RoadMapImage={RoadMapQ3} p1={"Arcstreams-guardian nodes launch"} p2={"Launch protocol on a 2-layer blockchain"} p3={"Launch 1st mass-scale arcarena tournament with prizes upto 1m usd "} fourthLi={false} LastLi={false}/>
                </Fade>
                </div>
            </div>
            
        </div>
    )
}

export default RoadMap
