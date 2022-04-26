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
import PteFaraland from '../../images/pte-faraland.png'
import PteFota from '../../images/pte-fota.png'
import PteSandbox from '../../images/pte-sanbox.png'
import PteMitra from '../../images/pte-mitra.png'
import PteWanaka from '../../images/pte-wanaka.png'
import PteStepHero from '../../images/pte-step.png'
import PteApex from '../../images/pte-apex.png'
import PteFifa from '../../images/pte-fifa.png'
import PteMinecraft from '../../images/pte-minecraft.png'
import PteNfl from '../../images/pte-nfl.png'
import PteOverwatch from '../../images/pte-overwatch.png'
import PteThetan from '../../images/pte-thetan.png'
import PteSplinterland from '../../images/pte-splinterland.png'
import PteAlien from '../../images/pte-alien.png'
import PteUnchained from '../../images/pte-unchained.png'
import PteAlong from '../../images/pte-along.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const PlayToEarn = () => {
    const settingsOne = {
        dots: false,
        infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: -1,
        autoplay: true,
        arrows:false,
        speed: 4000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1,
                    infinte:true,
                    cssEase: "linear",
    
                },
            },
            {
            breakpoint: 1200,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinte:true,
                cssEase: "linear",
                

            },
        },
        {
            breakpoint:1050,
            settings:{
                slideToShow:1,
                slideToScroll:1,
                infinte:true,
                cssEase: "linear",
            },
        },
    ],
        
      };
      const settingsTwo = {
        dots: false,
        infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: -1,
        autoplay: true,
        arrows:false,
        speed: 4000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:-1,
                    infinte:true,
                    cssEase: "linear",
                    
    
                },
            },
            {
            breakpoint: 1200,
            settings:{
                slidesToShow:2,
                slidesToScroll:-1,
                infinte:true,
                cssEase: "linear",

            },
        },
        {
            breakpoint:1050,
            settings:{
                slideToShow:1,
                slideToScroll:-1,
                infinte:true,
                cssEase: "linear",
            },
        },
    ],
        
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
                
                <Slider {...settingsOne}>


                <PteCard fota ={false} PteImage={PteCod} pteParagraph={"WARZONE"}/>
                <PteCard fota ={false} PteImage={PteFortnite} pteParagraph={"FORTNITE"}/>
                <PteCard fota ={false} PteImage={PteCs} pteParagraph={"CS-GO"}/>
                <PteCard fota ={false} PteImage={PteLol} pteParagraph={"LEAGUE OF LEGENDS"}/>
                <PteCard fota ={false} PteImage={PteRainbow} pteParagraph={"RAINBOW 6"}/>
                <PteCard fota ={false} PteImage={PteDota} pteParagraph={"DOTA 2"}/>
                <PteCard fota ={false} PteImage={PteApex} pteParagraph={"APEX LEGENDS"}/>
                <PteCard fota ={false} PteImage={PteFifa} pteParagraph={"FIFA 22"}/>
                <PteCard fota ={false} PteImage={PteMinecraft} pteParagraph={"MINECRAFT"}/>
                <PteCard fota ={false} PteImage={PteNfl} pteParagraph={"NFL 22"}/>
                <PteCard fota ={false} PteImage={PteOverwatch} pteParagraph={"OVERWATCH 2"}/>
                
               
                </Slider>
               
                
                </div>
                <div className="card-bottom">

             <Slider {...settingsTwo}>

                    <PteCard fota ={false} PteImage={PteFaraland} pteParagraph={"Faraland"}/>
                    <PteCard fota ={true} PteImage={PteFota} pteParagraph={"Fota"}/>
                    <PteCard fota ={false} PteImage={PteSandbox} pteParagraph={"Sandbox"}/>
                    <PteCard fota ={false} PteImage={PteMitra} pteParagraph={"LEAGUE OF MITRA"}/>
                    <PteCard fota ={false} PteImage={PteWanaka} pteParagraph={"Wanaka farm"}/>
                    <PteCard fota ={false} PteImage={PteStepHero} pteParagraph={"Step Hero"}/>
                    <PteCard fota ={false} PteImage={PteThetan} pteParagraph={"Thetan Arena"}/>
                    <PteCard fota ={false} PteImage={PteSplinterland} pteParagraph={"SPLINTERLAND"}/>
                    <PteCard fota ={false} PteImage={PteAlien} pteParagraph={"ALIEN WORLDS"}/>
                    <PteCard fota ={false} PteImage={PteUnchained} pteParagraph={"GODS UNCHAINED"}/>
                    <PteCard fota ={false} PteImage={PteAlong} pteParagraph={"ALONG WITH THE GODS"}/>
                    </Slider>
               
                </div>
            </div>
            <div className="pte-left-img">
                <img src={PteLeft} alt="pte-left"/>

            </div>
            
        </div>
    )
}

export default PlayToEarn
