import styles from './home.module.css';
import Navigation from './Navigation';
import TripPlan from './TripPlan';
import Destinations from './Destination';
import AspareLogo  from '../Assets/Aspare-Logo.png'
import Testimonials from './Testimonials';
import Footer from './Footer';
import CoustomBand from './CoustomBand';
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import dream from '../Assets/dream.png';
import plan from '../Assets/task.png';
import makeit from '../Assets/make-it-happen.png';
import FullScreenSlider from './her-slider';
import HomeSlider from './home-slider';


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
                <a href="tel:+4407467360046"><button>Discuss with Agent</button></a>

            </div>

            
        </div>
        </div>
         <h1 className={styles.carousalHeading}>Trending Destinations</h1>
         <HomeSlider/>
       
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