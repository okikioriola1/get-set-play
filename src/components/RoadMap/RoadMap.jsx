import React from "react";
import RoadMapCard from "../RoadMapCard/RoadMapCard";
import "./roadMap.css";
import RoadMapQ1 from "../../images/road-map-q1.png";
import RoadMapQ2 from "../../images/road-map-q2.png";
import RoadMapQ3 from "../../images/road-map-q3.png";
import RoadMapQ4 from "../../images/road-map-q4.png";
import Fade from "react-reveal";

const RoadMap = () => {
  return (
    <div className="road-map-section" id="roadmap">
      <div className="road-map-header">
        <h1>
          ROAD<span className="map">MAP</span>
        </h1>
      </div>
      <div className="road-map-main">
        <div className="road-2022">
          <Fade left cascade={true}>
            <div className="road-header">
              <h1>2022</h1>
            </div>
            <RoadMapCard
              RoadMapImage={RoadMapQ2}
              p1={"Seed and Private Backers and Partners Onboarding"}
              p2={"MVP- GSPArena P2P version - DAO based"}
              p3={"IDO launch of $GSP token"}
              fourthLi={true}
              p4={
                "Launch of GSP Staking Pools - Vote Escrow distribution model GSPMetaverse Initial prototyping"
              }
              LastLi={false}
            />
            <RoadMapCard
              RoadMapImage={RoadMapQ3}
              p1={"CEX listing of $GSP token"}
              p2={"Launch DAO app and snapshot spaces"}
              p3={"Audit of GSParena smart contracts"}
              fourthLi={true}
              p4={"GSPMetaverse architecture and development (Marketplace,Arena)"}
              LastLi={true}
              p5={"Testnet launch-GSPArenav1-Dao based"}
            />
            <RoadMapCard
              RoadMapImage={RoadMapQ4}
              p1={"Mainnet launch-GSPArenav1-Dao based"}
              p2={
                "Add support to top three games and 10 match templates on GSPArena"
              }
              p3={
                "Referral program for esports, teams, streamers, influencers, etc"
              }
              fourthLi={true}
              p4={
                "Testnet launch-GSPtreams dapp-P2P streaming with light-nodes"
              }
              LastLi={true}
              p5={
                  "GSPMetaverse Layer 1 Launch for Marketplace and Arena on Ethereum"
              }
            />
          </Fade>
        </div>
        <div className="road-2023">
          <Fade right cascade={true} wait={3000}>
            <div className="road-header">
              <h1>2023</h1>
            </div>
            <RoadMapCard
              RoadMapImage={RoadMapQ1}
              p1={
                "Mainnet launch-GSPstreams dapp-P2P streaming with light-nodes"
              }
              p2={
                "Integration with top 3 distribution partners-in-game match oracles "
              }
              p3={
                "Onboarding top 10 popular games, 50 popular stramers/esport teams"
              }
              fourthLi={true}
              p4={"$GSP token buy back and burn program"}
              LastLi={true}
              p5={
                  "GSPMetaverse v2 development (Streamcenter, GSP Plaza)"
              }
            />
            <RoadMapCard
              RoadMapImage={RoadMapQ2}
              p1={"Launch GSPArena v2-with automated in-game decision making"}
              p2={"Launch protocol revenue tracking dashboard"}
              p3={"Launch GSPArena v2-with automated in-game decision making"}
              fourthLi={true}
              p4={
                "GSP Metaverse v2 Launch "
              }
              LastLi={false}
            />
            <RoadMapCard
              RoadMapImage={RoadMapQ3}
              p1={"GSPstreams-guardian nodes launch"}
              p2={"Launch protocol on a 2-layer blockchain"}
              p3={
                "Launch 1st mass-scale GSParena tournament with prizes upto 1m usd in the GSPMetaverse "
              }
              fourthLi={false}
              LastLi={false}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
