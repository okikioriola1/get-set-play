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
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:3,
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
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:3,
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
