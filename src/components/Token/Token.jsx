import React from 'react'
import './token.css'
import TokenImage from '../../images/token-img.png'
import TokenBgImg from '../../images/Token-bg.png'
const Token = () => {
    return (
        <div className="token-section" id="token">
            <div className="token-header">
                <h1>TOKEN</h1>
            </div>
            <img src={TokenBgImg} className="token-bg-img" alt="token"/>
            <div className="token-container">

                <div className="token-text">
                    <div className="token-text-content">
                        <h1>$GSP</h1>
                        <p>Tokenomics, the combination of token and economics, refers to a crypto asset's qualities that make it appealing to both users and investors. It refers to the supply and demand characteristics of the asset.</p>
                    </div>
                    <div className="token-text-content">
                        <h1>$GSP</h1>
                        <p>Tokenomics, the combination of token and economics, refers to a crypto asset's qualities that make it appealing to both users and investors. It refers to the supply and demand characteristics of the asset.</p>
                    </div>
                    <div className="token-text-content">
                        <h1>$GSP</h1>
                        <p>Tokenomics, the combination of token and economics, refers to a crypto asset's qualities that make it appealing to both users and investors. It refers to the supply and demand characteristics of the asset.</p>
                    </div>

                </div>
                <div className="token-img">
                    <img src={TokenImage} className="token-image" alt="token"/>

                </div>
            </div>

            
        </div>
    )
}

export default Token
