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
import { PostAPI } from './Api/ApiInterface';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ConnectingAirportsOutlined } from '@mui/icons-material';


function Home(){
    const [index, setIndex] = React.useState(0);

    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);

const MailHandler = (Data) => {
        if (Data.outcome === "success"){
            setSuccess({message:"Succefully Submitted"})
        }else{
          setError({message:"Failed to Sumbit"})
        }
       
      };

function sendTravelPlanEmail(body){
    PostAPI ({
     body:JSON.stringify(body)
    ,type:'application/json'
    ,path:"/send_travel_planing"
    ,callbackfunc:MailHandler
  })}

  return(
    <div className={styles.div0001}>
        <div className={styles.div000}>
        <div className={styles.div001}>          
         <Navigation path='home'/>
         </div>
         <Stack sx={{ width: '50%', display:error?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
           <Alert onClose={() => {setError(null)}}>{error?.message}</Alert>
         </Stack>
         <Stack sx={{ width: '50%', display:success?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
           <Alert onClose={() => {setSuccess(null)}}>{success?.message}</Alert>
        </Stack>    
        <FullScreenSlider/>
        <div className={styles.div0010}> 
        <div className={styles.div0011}> 
        <TripPlan sendTravelPlanEmail={sendTravelPlanEmail}/>
            <div className={styles.div0011a}>
                 </div>
            <div className={styles.div0011b}>
                <p>Need help planning your next vacation? Chat with us now to get personalized recommendations and assistance with booking flights, hotels, tours, and more. Our travel experts are here to make your trip stress-free and enjoyable.</p>
                <a href="tel:+447467360046"><button>Discuss with Agent</button></a>

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