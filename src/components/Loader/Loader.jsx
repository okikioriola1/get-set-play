import React from 'react'
import './loader.css'
import {motion} from 'framer-motion'

const Loader = () => {
    return (
        <div className="loader-screen">
            <div className="loader-screen-main">
                <div className="loader-screen-words">
                    <motion.div initial={{x:"150vw", transition:{type:"spring", duration:2}}}
        animate={{x:0, transition:{type:"spring", duration:2}}}
        exit={{ x:"-60vw", scale:[1,0], transition:{type:"spring", duration:2.5}}} className="get">GET</motion.div>
                    <motion.div initial={{x:"150vw", transition:{type:"spring", duration:2}}}
        animate={{x:0, transition:{type:"spring", duration:2}}}
        exit={{ x:"-60vw", scale:[1,0], transition:{type:"spring", duration:2.5}}} className="set">SET</motion.div>
                    <motion.div className="play">PLAY</motion.div>
                </div>

            </div>
            
        </div>
    )
}

export default Loader
