import React, {useEffect, useState} from 'react'
import './loader.css'
import LoadingGif from '../../images/loading.gif'
import {AnimatePresence, motion} from 'framer-motion'

const Loader = () => {
    // const[firstWord, setFirstWord] = useState(true);
    // const[secondWord, setSecondWord] = useState(true);
    // const[thirdWord, setThirdWord] = useState(true);

    const [showWord, setShowWord] = useState(0);
    
    useEffect(()=>{
       const wordone= setTimeout(()=>setShowWord(1),3000)
       return ()=> clearTimeout(wordone)
    },[])
    useEffect(()=>{
        const wordtwo= setTimeout(()=>setShowWord(2), 5000)
        return ()=> clearTimeout(wordtwo)
        
    },[])
    // useEffect(()=>{
    //     const wordthree = setTimeout(()=>setShowWord(2), 8000)
    //     return ()=> clearTimeout(wordthree)
        
    // },[])
    return (
        

    <motion.div
         initial={{x:0, transition:{duration:1},opacity:0}}
         animate ={{x:0, transition:{duration:1}, opacity:1}} 
         exit ={{x:0, transition:{duration:1}, opacity:0}} className="loader-screen">
             <div className="loader-screen-main">
                 <div className="loader-screen-words">
                 <AnimatePresence>
                     {showWord=== 0 ? (
                         

                     <motion.div className="get"><h1>GET</h1></motion.div>): 
         
                        
         showWord===1?(
                     
                     <motion.div className="set"><h1>SET</h1></motion.div>

         ): (
       
         
                     <motion.div exit ={{x:"-150vw", transition:{duration:1.5}}} className="play"><h1>PLAY</h1></motion.div>
                     )}
                     
                    </AnimatePresence>
                 </div>

             </div>
            
         </motion.div>
        
            
    )
}

export default Loader
