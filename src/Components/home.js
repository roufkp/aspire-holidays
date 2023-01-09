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


function Home(){
    const [index, setIndex] = React.useState(0);
  return(
    <div className={styles.div000}>
        <div className={styles.div001}>          
            <Navigation path='home'/>
            <div className={styles.div002a}>
                <div className={styles.div004}>
                <div className={styles.div003a}>Aspire Holidays</div>
                    <div className={styles.div003}>Make it a Reality</div>
                    <div className={styles.div003p}>
                    <p> A picture is worth a thousand words , but a memory is priceless. Create your memories. Our most valuable possession. </p>
           
                    </div>
                    <div className={styles.div003pc}>
                        Book your dream vacation now !
                        <button>Book right  now</button>
                    </div>
                   
                </div>     
                
            </div>
        </div>
        <div className={styles.div0011}> 
        <TripPlan/>
            <div className={styles.div0011a}>
                 </div>
            <div className={styles.div0011b}>
                <p>Need help planning your next vacation? Chat with us now to get personalized recommendations and assistance with booking flights, hotels, tours, and more. Our travel experts are here to make your trip stress-free and enjoyable.</p>
                <button>Discuss with Agent</button>
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
                                DUBAI
                        </div>
                    </div>
            </div>
            <div   className={styles.caroItem}>
                
                <div  className={styles.caroImage}>
                    <img src={img002} alt="" />
                </div>
                <div  className={styles.caroText}>
                    <div  className={styles.caroTextHeading}>
                            MALDIVES
                    </div>
                </div>
        </div>
           
        <div   className={styles.caroItem}>
                
                <div  className={styles.caroImage}>
                    <img src={img003} alt="" />
                </div>
                <div  className={styles.caroText}>
                    <div  className={styles.caroTextHeading}>
                            PARIS
                    </div>
                </div>
        </div>
        
        <div   className={styles.caroItem}>
                
                <div  className={styles.caroImage}>
                    <img src={img004} alt="" />
                </div>
                <div  className={styles.caroText}>
                    <div  className={styles.caroTextHeading}>
                            ITALY
                    </div>
                </div>
        </div>
        </Carousel>
        <Destinations></Destinations>
        <Testimonials styles="margin-top:70px"/>
        <CoustomBand />
        <Footer />
    </div>
    )
}

export default Home;