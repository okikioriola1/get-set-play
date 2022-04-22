import React, {useEffect, useState} from 'react'
import './loader.css'
import LoadingGif from '../../images/loading.gif'
import {AnimatePresence, motion} from 'framer-motion'

const Loader = () => {
    // const[firstWord, setFirstWord] = useState(true);
    // const[secondWord, setSecondWord] = useState(true);
    // const[thirdWord, setThirdWord] = useState(true);

    
    // useEffect(()=>{
    //     setTimeout(()=>setFirstWord(false),2000)
    // })
    // useEffect(()=>{
    //     setTimeout(()=>setSecondWord(false), 3000)
        
    // },[firstWord])
    // useEffect(()=>{
    //     setTimeout(()=>setThirdWord(false), 10000)
        
    // },[secondWord])
    return (
        <div className="loader-screen"> 
        <div className="loader-screen-words">
            <img src={LoadingGif} alt="loader"/>
        </div>
        

        
    </div>
    // <motion.div
        // initial={{x:0, transition:{duration:1},opacity:0}}
        // animate ={{x:0, transition:{duration:1}, opacity:1}} 
        // exit ={{x:0, transition:{duration:1}, opacity:0}}className="loader-screen">
        //     <div className="loader-screen-main">
        //         <div className="loader-screen-words">
        //             <AnimatePresence>

        //           {firstWord &&(  <motion.div initial={{x:"150vw", transition:{type:"spring", duration:1}, opacity:0}}
        // animate={{x:0, transition:{type:"spring", duration:2}, opacity: 1}}
        // exit={{ x:"-150vw", transition:{type:"spring", duration:2.5}}} className="get">GET</motion.div>)}
        //             {secondWord&&(
        //             <motion.div initial={{x:0, transition:{ duration:1.5}, opacity:0}}
        // animate={{x:0, transition:{delay:2, duration:1.5}, opacity:1}}
        // exit={{ x:"-150vw",  transition:{ type:"spring",duration:1}}} className="set">SET</motion.div>
        // )}
        // {thirdWord &&(
        //             <motion.div
        //             initial={{x:"0",transition:{duration:5.5, delay:5.5},opacity:0}}
        //             animate={{x:0, transition:{delay:6.5,duration:5.5}, opacity:1}}
        //             exit={{ x:"-150vw", transition:{type:"spring", duration:2.5}}} className="play">PLAY</motion.div>
        //             )}
        //             </AnimatePresence>
        //         </div>

        //     </div>
            
        // </motion.div>
        
       
    )
}

export default Loader
