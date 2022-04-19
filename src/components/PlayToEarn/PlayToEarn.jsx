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



const PlayToEarn = () => {
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
                <PteCard PteImage={PteCod} pteParagraph={"WARZONE"}/>
                <PteCard PteImage={PteFortnite} pteParagraph={"FORTNITE"}/>
                <PteCard PteImage={PteCs} pteParagraph={"CS-GO"}/>
                </div>
                <div className="card-bottom">
                <PteCard PteImage={PteLol} pteParagraph={"LEAGUE OF LEGENDS"}/>
                <PteCard PteImage={PteRainbow} pteParagraph={"RAINBOW 6"}/>
                <PteCard PteImage={PteDota} pteParagraph={"DOTA 2"}/>
                </div>
            </div>
            <div className="pte-left-img">
                <img src={PteLeft} alt="pte-left"/>

            </div>
            
        </div>
    )
}

export default PlayToEarn
