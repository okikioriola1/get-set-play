import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <div className= "footer-section">
            <div className="footer-content">
                <div className="footer-text">
                    <div className="top-footer-text">
                        <h1>Stay In The Loop</h1>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
                    </div>
                   

                </div>
                <div className="footer-form">
                    <form className="form">
                        <input type="text" placeholder="Your email address"className="footer-input"/>
                        <button>Sign Up</button>
                    </form>


                </div>
            </div>
            <div className="footer-bottom">
            <div className="bottom-footer-text">
                        <p>© 2022 Get Set Play. All Rights Reserved.</p>

                    </div>
                    <div className="footer-agreement">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
            </div>
            
        </div>
    )
}

export default Footer
