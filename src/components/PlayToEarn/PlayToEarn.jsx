import React from 'react'
import './playToEarn.css'

import PteRight from '../../images/pte-right-bg.svg'
import PteLeft from '../../images/pte-left-bg.svg'
import PteCard from '../PteCard/PteCard'
import PteCod from '../../images/pte-cod.png'
import PteFortnite from '../../images/pte-fortnite.png'
import PteCs from '../../images/pte-cs.png'
import PteLol from '../../images/pte-lol.png'
import PteRainbow from '../../images/pte-rainbow.png'
import PteDota from '../../images/pte-dota.png'
import PteFaraland from '../../images/Faraland.png'
import PteFota from '../../images/Fota.png'
import PteSandbox from '../../images/Sandbox.png'
import PteMitra from '../../images/Mitra.png'
import PteWanaka from '../../images/Wanaka.png'
import PteStepHero from '../../images/Step-hero.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const PlayToEarn = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 5000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 0 },
        //   items: 1
        // },
        // mobile: {
        //   breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="play-to-earn-section">
            <div className="pte-right-img">
                <img src={PteRight} alt="pte-right"/>
            </div>
            <div className="pte-header">
                <h1>PLAYTO<span className="earn">EARN</span></h1>
            </div>
            <div className="play-to-earn-container">
                <div className="card-top">
                    <Carousel  swipeable={false}
             draggable={true}
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={2000}
             arrows={false}
             responsive={responsive}
            
             
             keyBoardControl={true}>
                <PteCard PteImage={PteCod} pteParagraph={"WARZONE"}/>
                <PteCard PteImage={PteFortnite} pteParagraph={"FORTNITE"}/>
                <PteCard PteImage={PteCs} pteParagraph={"CS-GO"}/>
                <PteCard PteImage={PteLol} pteParagraph={"LEAGUE OF LEGENDS"}/>
                <PteCard PteImage={PteRainbow} pteParagraph={"RAINBOW 6"}/>
                <PteCard PteImage={PteDota} pteParagraph={"DOTA 2"}/>
                </Carousel>
                </div>
                <div className="card-bottom">
                    <Carousel  swipeable={false}
             draggable={true}
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={2000}
             arrows={false}
             responsive={responsive}

            
             
             keyBoardControl={true}>

                    <PteCard PteImage={PteFaraland} pteParagraph={"Faraland"}/>
                    <PteCard PteImage={PteFota} pteParagraph={"Fota"}/>
                    <PteCard PteImage={PteSandbox} pteParagraph={"Sandbox"}/>
                    <PteCard PteImage={PteMitra} pteParagraph={"LEAGUE OF MITRA"}/>
                    <PteCard PteImage={PteWanaka} pteParagraph={"Wanaka farm"}/>
                    <PteCard PteImage={PteStepHero} pteParagraph={"Step Hero"}/>
                </Carousel>
                </div>
            </div>
            <div className="pte-left-img">
                <img src={PteLeft} alt="pte-left"/>

            </div>
            
        </div>
    )
}

export default PlayToEarn
