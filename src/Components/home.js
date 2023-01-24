import styles from './home.module.css';
import Navigation from './Navigation';
import TripPlan from './TripPlan';
import Destinations from './Destination';
import AspareLogo  from '../Assets/Aspare-Logo.png'
import Testimonials from './Testimonials';
import Footer from './Footer';
import CoustomBand from './CoustomBand';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from '../Carousal';
import React from "react";
import img001 from '../Assets/dubai-trending.jpg';
import img002 from '../Assets/maldives-trending.jpg';
import img003 from '../Assets/paris-trending.jpg';
import img004 from '../Assets/italy-trending.jpg';
import dream from '../Assets/dream.png';
import plan from '../Assets/task.png';
import makeit from '../Assets/make-it-happen.png';
import FullScreenSlider from './her-slider';


function Home(){
    const [index, setIndex] = React.useState(0);
  return(
    <div className={styles.div0001}>
        <div className={styles.div000}>
        <div className={styles.div001}>          
            <Navigation path='home'/>
            
            
            
        </div>
        <FullScreenSlider/>
        <div className={styles.div0010}> 
        <div className={styles.div0011}> 
        <TripPlan/>
            <div className={styles.div0011a}>
                 </div>
            <div className={styles.div0011b}>
                <p>Need help planning your next vacation? Chat with us now to get personalized recommendations and assistance with booking flights, hotels, tours, and more. Our travel experts are here to make your trip stress-free and enjoyable.</p>
                <button>Discuss with Agent</button>
            </div>

            
        </div>
        </div>
         <h1 className={styles.carousalHeading}>Trending Destinations</h1>
        <Carousel className={styles.caro} 
            sliderClass='react-multi-carousel-track'
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            showDots={true}
            rewind={true}
            rewindWithAnimation={true}
            autoPlaySpeed={1000}
            customTransition="all .5 linear" transitionDuration={1000}>

            <div   className={styles.caroItem}>
                
                    <div  className={styles.caroImage}>
                        <img src={img001} alt="" />
                    </div>
                    <div  className={styles.caroText}>
                        <div  className={styles.caroTextHeading}>
                                Dubai
                        </div>
                    </div>
            </div>
            <div   className={styles.caroItem}>
                
                <div  className={styles.caroImage}>
                    <img src={img002} alt="" />
                </div>
                <div  className={styles.caroText}>
                    <div  className={styles.caroTextHeading}>
                            Maldives
                    </div>
                </div>
        </div>
           
        <div   className={styles.caroItem}>
                
                <div  className={styles.caroImage}>
                    <img src={img003} alt="" />
                </div>
                <div  className={styles.caroText}>
                    <div  className={styles.caroTextHeading}>
                            Paris
                    </div>
                </div>
        </div>
        
        <div   className={styles.caroItem}>
                
                <div  className={styles.caroImage}>
                    <img src={img004} alt="" />
                </div>
                <div  className={styles.caroText}>
                    <div  className={styles.caroTextHeading}>
                            Italy
                    </div>
                </div>
        </div>
        </Carousel>
        <Destinations></Destinations>
        <div  className={styles.container}>
        <Testimonials styles="margin-top:70px"/>
        <CoustomBand />
        </div>
        
        </div>
        <Footer />
        
    </div>
    )
}

export default Home;