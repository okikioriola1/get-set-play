import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PteCard from '../PteCard/PteCard'
import PteCod from '../../images/pte-cod.png'
import PteFortnite from '../../images/pte-fortnite.png'
import PteCs from '../../images/pte-cs.png'
import PteLol from '../../images/pte-lol.png'
import PteRainbow from '../../images/pte-rainbow.png'
import PteDota from '../../images/pte-dota.png'
import './carouselTest.css'

const CarouselTest = () => {
    const settings = {
        dots: true,
        infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: -1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 700,
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:-1,
                    infinte:true,
                    dots: true,
    
                },
            },
            {
            breakpoint: 1200,
            settings:{
                slidesToShow:2,
                slidesToScroll:-1,
                infinte:true,
                dots: true,

            },
        },
        {
            breakpoint:900,
            settings:{
                slideToShow:1,
                slideToScroll:-1,
                infinte:true,
                dots: true,
            },
        },
    ],
        
      };
    return (
        <div className="carousel-test">
      <Slider {...settings}>


<PteCard fota ={false} PteImage={PteCod} pteParagraph={"WARZONE"}/>
<PteCard fota ={false} PteImage={PteFortnite} pteParagraph={"FORTNITE"}/>
<PteCard fota ={false} PteImage={PteCs} pteParagraph={"CS-GO"}/>
<PteCard fota ={false} PteImage={PteLol} pteParagraph={"LEAGUE OF LEGENDS"}/>
<PteCard fota ={false} PteImage={PteRainbow} pteParagraph={"RAINBOW 6"}/>
<PteCard fota ={false} PteImage={PteDota} pteParagraph={"DOTA 2"}/>
</Slider>
            
        </div>
    )
}

export default CarouselTest




// import React from 'react'
// import './playToEarn.css'

// import PteRight from '../../images/pte-right-bg.svg'
// import PteLeft from '../../images/pte-left-bg.svg'
// import PteCard from '../PteCard/PteCard'
// import PteCod from '../../images/pte-cod.png'
// import PteFortnite from '../../images/pte-fortnite.png'
// import PteCs from '../../images/pte-cs.png'
// import PteLol from '../../images/pte-lol.png'
// import PteRainbow from '../../images/pte-rainbow.png'
// import PteDota from '../../images/pte-dota.png'
// import PteFaraland from '../../images/Faraland.png'
// import PteFota from '../../images/Fota.png'
// import PteSandbox from '../../images/Sandbox.png'
// import PteMitra from '../../images/Mitra.png'
// import PteWanaka from '../../images/Wanaka.png'
// import PteStepHero from '../../images/Step-hero.png'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";


// const PlayToEarn = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
        
//       };
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 5000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 0 },
//         //   items: 1
//         // },
//         // mobile: {
//         //   breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//     return (
//         <div className="play-to-earn-section">
//             <div className="pte-right-img">
//                 <img src={PteRight} alt="pte-right"/>
//             </div>
//             <div className="pte-header">
//                 <h1>PLAYTO<span className="earn">EARN</span></h1>
//             </div>
//             <div className="play-to-earn-container">
//                 <div className="card-top">
//                     <Carousel  swipeable={false}
                    
//              draggable={true}
//              infinite={true}
//              autoPlay={true}
//              autoPlaySpeed={1000}

//              arrows={false}
//              responsive={responsive}
            
             
//              keyBoardControl={true}> 

                
//                 {/* <Slider {...settings}> */}


//                 <PteCard fota ={false} PteImage={PteCod} pteParagraph={"WARZONE"}/>
//                 <PteCard fota ={false} PteImage={PteFortnite} pteParagraph={"FORTNITE"}/>
//                 <PteCard fota ={false} PteImage={PteCs} pteParagraph={"CS-GO"}/>
//                 <PteCard fota ={false} PteImage={PteLol} pteParagraph={"LEAGUE OF LEGENDS"}/>
//                 <PteCard fota ={false} PteImage={PteRainbow} pteParagraph={"RAINBOW 6"}/>
//                 <PteCard fota ={false} PteImage={PteDota} pteParagraph={"DOTA 2"}/>
//                 {/* </Slider> */}
               
//                 </Carousel>
//                 </div>
//                 <div className="card-bottom">
//                     <Carousel  swipeable={false}
//              draggable={true}
//              infinite={true}
//              autoPlay={true}
//              autoPlaySpeed={1000}
//              arrows={false}
//              responsive={responsive}

            
             
//              keyBoardControl={true}>

//                     <PteCard fota ={false} PteImage={PteFaraland} pteParagraph={"Faraland"}/>
//                     <PteCard fota ={true} PteImage={PteFota} pteParagraph={"Fota"}/>
//                     <PteCard fota ={false} PteImage={PteSandbox} pteParagraph={"Sandbox"}/>
//                     <PteCard fota ={false} PteImage={PteMitra} pteParagraph={"LEAGUE OF MITRA"}/>
//                     <PteCard fota ={false} PteImage={PteWanaka} pteParagraph={"Wanaka farm"}/>
//                     <PteCard fota ={false} PteImage={PteStepHero} pteParagraph={"Step Hero"}/>
//                 </Carousel>
//                 </div>
//             </div>
//             <div className="pte-left-img">
//                 <img src={PteLeft} alt="pte-left"/>

//             </div>
            
//         </div>
//     )
// }

// export default PlayToEarn
