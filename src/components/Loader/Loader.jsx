import React, {useEffect, useState} from 'react'
import './loader.css'
import LoadingGif from '../../images/loading.gif'
import {AnimatePresence, motion} from 'framer-motion'

const Loader = () => {
    const[firstWord, setFirstWord] = useState(true);
    const[secondWord, setSecondWord] = useState(true);
    const[thirdWord, setThirdWord] = useState(true);

    
    useEffect(()=>{
       const wordone= setTimeout(()=>setFirstWord(false),3000)
       return ()=> clearTimeout(wordone)
    })
    useEffect(()=>{
        const wordtwo= setTimeout(()=>setSecondWord(false), 5000)
        return ()=> clearTimeout(wordtwo)
        
    },[])
    useEffect(()=>{
        const wordthree = setTimeout(()=>setThirdWord(false), 8000)
        return ()=> clearTimeout(wordthree)
        
    },[])
    return (
        <div className="loader-screen"> 
        {/* <div className="loader-screen-words">
            <img src={LoadingGif} alt="loader"/>
        </div>
        

        
    </div> */}
    <motion.div
         initial={{x:0, transition:{duration:1},opacity:0}}
         animate ={{x:0, transition:{duration:1}, opacity:1}} 
         exit ={{x:0, transition:{duration:1}, opacity:0}}className="loader-screen">
             <div className="loader-screen-main">
                 <div className="loader-screen-words">
                 <AnimatePresence>

                   {firstWord &&(  <motion.div initial={{x:"150vw", transition:{type:"spring", duration:1}, opacity:0}}
         animate={{x:0, transition:{type:"spring", duration:1}, opacity: 1}}
         exit={{ x:"-150vw", transition:{type:"spring", duration:2.5}}} className="get">GET</motion.div>)}
                     {secondWord&&(
                     <motion.div initial={{x:"150vw", transition:{ type:"spring",delay:3, duration:1}, opacity:0}}
         animate={{x:0, transition:{ duration:1}, opacity:1}}
         exit={{ x:"-150vw",  transition:{ type:"spring",duration:1}}} className="set">SET</motion.div>
         )}
         {thirdWord &&(
                     <motion.div
                     initial={{x:"150w",transition:{duration:1, delay:5},opacity:0}}
                     animate={{x:0, transition:{duration:5}, opacity:1}}
                     exit={{ x:"-150vw", transition:{type:"spring", duration:2.5}}} className="play">PLAY</motion.div>
                     )}
                    </AnimatePresence>
                 </div>

             </div>
            
         </motion.div>
        
            </div>
    )
}

export default Loader
