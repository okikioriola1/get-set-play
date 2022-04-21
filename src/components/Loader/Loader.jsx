import React, {useEffect, useState} from 'react'
import './loader.css'
import {AnimatePresence, motion} from 'framer-motion'

const Loader = () => {
    const[firstWord, setFirstWord] = useState(true);
    const[secondWord, setSecondWord] = useState(true);
    const[thirdWord, setThirdWord] = useState(true);

    
    useEffect(()=>{
        setTimeout(()=>setFirstWord(false),12000)
    })
    useEffect(()=>{
        setTimeout(()=>setSecondWord(false), 12000)
        
    },[firstWord])
    useEffect(()=>{
        setTimeout(()=>setThirdWord(false), 12000)
        
    },[secondWord])
    return (
        <AnimatePresence>

        <motion.div
        initial={{x:0, transition:{duration:1},opacity:0}}
        animate ={{x:0, transition:{duration:1}, opacity:1}} 
        exit ={{x:0, transition:{duration:1}, opacity:0}}className="loader-screen">
            <div className="loader-screen-main">
                <div className="loader-screen-words">
                    <AnimatePresence>

                  {firstWord &&(  <motion.div initial={{x:"150vw", transition:{type:"spring", duration:2}, opacity:0}}
        animate={{x:0, transition:{type:"spring", duration:2}, opacity: 1}}
        exit={{ x:"-150vw", transition:{type:"spring", duration:2.5}}} className="get">GET</motion.div>)}
                    {secondWord&&(
                    <motion.div initial={{x:0, transition:{ duration:1.5}, opacity:0}}
        animate={{x:0, transition:{delay:2.5, duration:2.5}, opacity:1}}
        exit={{ x:"-150vw",  transition:{ type:"spring",duration:1.5}}} className="set">SET</motion.div>
        )}
        {thirdWord &&(
                    <motion.div
                    initial={{x:"0",transition:{duration:1.5},opacity:0}}
                    animate={{x:0, transition:{delay:5.5,duration:1.5}, opacity:1}}
                    exit={{ x:"-150vw", transition:{type:"spring", duration:2.5}}} className="play">PLAY</motion.div>
                    )}
                    </AnimatePresence>
                </div>

            </div>
            
        </motion.div>
        </AnimatePresence>
    )
}

export default Loader
