import React from 'react'

import './contactModal.css'
import {RiCloseLine} from 'react-icons/ri'
import {AnimatePresence, motion} from 'framer-motion'

const ContactModal = ({closeModal}) => {
    const modalMotion = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
        },
      };

    return (
        <AnimatePresence>
        <motion.div variants={modalMotion}
            initial="hidden"
            animate="visible" className="contact-modal-page">
          
                <motion.div variants={modalMotion}
            initial="hidden"
            animate="visible" className="contact-form">
                    <div className="top-form-part">
                    <h1>Contact Us</h1>
                    <div className="close-modal-icon">
                        <button onClick={()=>closeModal()}><RiCloseLine/></button>
                    </div>
                 

                    </div>
                    
                    <form className="modal-form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Tg name"/>
                        <input type="text" placeholder="Email"/>
                        <textarea placeholder="Reason for contacting"></textarea>
                        <button>Submit</button>
                    </form>
                </motion.div>
            </motion.div>
            </AnimatePresence>
      
    )
}

export default ContactModal
