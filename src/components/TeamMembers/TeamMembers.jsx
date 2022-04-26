import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import "./teamMembers.css";
import Michelle from "../../images/Michelle.png";
import Rouchelle from "../../images/Rouchelle.png";
import Shermen from "../../images/Shermen.png";
import Cassal from "../../images/Cassal.png";
import Thomas from "../../images/Thomas.png";

const TeamMembers = () => {
  return (
    <div className="team-members-section" id="team">
      <div className="team-members-header">
        <h1>
          TEAM <span>MEMBERS</span>
        </h1>
      </div>

      <div className="team-cards">
        <div className="team-cards-top">
          <TeamCard
            link={" https://www.linkedin.com/in/michelle-j-454335224/"}
            ProfileImage={Michelle}
            profileHeader={"MICHELLE JANICE"}
            profilePosition={"FOUNDER - CEO"}
            memberDescription={
              "Senior Art Director with over 10+ years of experience who has spearheaded fortune 500 projects valued at over $200 million. Has worked with some of the largest gaming, betting and entertainment  giants helping them strategically position products for optimization. Has 100% success rate in increasing user base and utility of platforms."
            }
          />
          <TeamCard
            link={"https://www.linkedin.com/in/rouchelle-irani-559336224/"}
            ProfileImage={Rouchelle}
            profileHeader={"ROUCHELLE IRANI"}
            profilePosition={"CO-FOUNDER - COO"}
            memberDescription={
              "Senior Business Developer and Partnerships Manager at BBDO with over 7 years experience managing a $100 million portfolio. Crypto enthusiast with thorough understanding of the industry's requirements, strategies, and goals, Rouchelle is skilled at maintaining operations, outreach, and partnerships."
            }
          />
          <TeamCard
            link={"https://www.linkedin.com/in/shermen-joseph-677341224/"}
            ProfileImage={Shermen}
            profileHeader={"SHERMEN JOSEPH"}
            profilePosition={"CTO"}
            memberDescription={
              "With over 9 years experience in blockchain solution development, and deployment, have implemented solutions handling over $1 million in total transacted value. Expert in JavaScript, Solidity, BSC, Rust, Nodejs, Reactjs, and Angular Web3, Shermen has worked for the likes LGS and Tech Data, now heading up blockchain development at GETSETPLAY."
            }
          />
        </div>
        <div className="team-cards-bottom">
          <TeamCard
            link={"https://www.linkedin.com/in/cassal-leon-97676257/"}
            ProfileImage={Cassal}
            profileHeader={"CASSAL LEON"}
            profilePosition={"CREATIVE LEAD"}
            memberDescription={
              "UI/UX LEAD WITH OVER 10+ YEARS OF EXPERIENCE IN WEBSITE AND MOBILE DESIGN WHO FOCUSED ON USER FLOW, CREATION OF WIREFRAMES, AND CREATING CLICKABLE PROTOTYPES AT BLOCKFI.HE IS ESPECIALLY SKILLED IN DESIGNING AND DEVELOPING UI MOCKUPS, PROTOTYPES AND ILLUSTRATIONS."
            }
          />
          <TeamCard
            link={"https://www.linkedin.com/in/erwinthomas93/"}
            ProfileImage={Thomas}
            profileHeader={"ERWIN THOMAS (ERIN)"}
            profilePosition={"PARTNERSHIP STRATEGIST"}
            memberDescription={
              "DIGITAL MARKETING MANAGER WITH OVER 5+ YEARS OF EXPERIENCE IN MARKETING STRATEGIES AND SEARCH ENGINE OPTIMIZATION.HE HAS PREVIOUSLY WORKED IN UPLERS WHERE HE LEAD BRAND MARKETING, PRODUCT MARKETING, AND DIGITAL MARKETING."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
