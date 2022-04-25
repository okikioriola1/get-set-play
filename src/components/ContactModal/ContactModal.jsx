import React from 'react'

import './contactModal.css'

const ContactModal = () => {
    return (
        <div className="contact-modal-page">
            <div className="contact-modal-section">
                <div className="contact-form">
                    <form className="modal-form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Tg name"/>
                        <input type="text" placeholder="Email"/>
                        <textarea></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ContactModal
