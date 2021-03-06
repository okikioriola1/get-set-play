import React from "react";
import "./infoSection.css";
import InfoLeftImage from "../../images/info-mouse.svg";
import InfoRightImage from "../../images/info-keyboard.svg";
import InfoCard from "../InfoCards/InfoCard";
import InfoHands from "../../images/info-hands.svg";
import InfoPhone from "../../images/info-phone.svg";
import InfoGame from "../../images/info-game.svg";
import InfoPeople from "../../images/info-people.svg";
import InfoVirus from "../../images/info-virus.svg";
import Fade from "react-reveal";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <div className="info-section">
      <Fade right cascade={true}>
        <motion.div className="info-left-image">
          <img src={InfoLeftImage} className="info-img" alt="infoLeft" />
        </motion.div>
      </Fade>
      <div className="info-section-container">
        <div className="info-card-top">
          <InfoCard
            header={"Easy to access "}
            paragraph={
              "Players from all over the world can access our desktop client and use either USDT, BTC, ETH or GSP to deposit or withdraw from their GETSETPLAY account from anywhere in the world."
            }
            InfoImage={InfoHands}
          />
          <InfoCard
            header={"Available on Mobile"}
            paragraph={
              "Players can download GETSETPLAY's mobile application to access the same tournaments, stream live gameplays or bet on Esport matches on the go. "
            }
            InfoImage={InfoPhone}
          />
          <InfoCard
            header={"Community-Centric"}
            paragraph={
              "Our growing community of Esport gaming fans are our greatest asset. We give their thoughts, ideas and opinions the highest priority"
            }
            InfoImage={InfoGame}
          />
        </div>
        <div className="info-card-bottom">
          <InfoCard
            header={"Player Promotions"}
            paragraph={
              "GETSETPLAY being a community focused brand has aimed to offer the best possible promotions in the Esport industry."
            }
            InfoImage={InfoPeople}
          />
          <InfoCard
            header={"100% Decentralized"}
            paragraph={
              "Our one of a kind feature set gives 100% control to its community and its users. Be it setting up matches, announcing results or placing bets. The GETSETPLAY community works together to make magic happen."
            }
            InfoImage={InfoVirus}
          />
        </div>
      </div>
      <Fade left cascade={true}>
        <motion.div className="info-right-image">
          <img src={InfoRightImage} className="info-img" alt="infoLeft" />
        </motion.div>
      </Fade>
    </div>
  );
};

export default InfoSection;
