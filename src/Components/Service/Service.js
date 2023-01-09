import styles from './Service.module.css';
import Navigation from '../Navigation';

import Footer from '../Footer';
import img0021 from '../../Assets/picture_014.jpg';
import img0010 from '../../Assets/singapore.jpg';
import img0011 from '../../Assets/thailand.jpg';
import img009 from '../../Assets/bali.jpg';
import img008 from '../../Assets/maldives-trending.jpg';
import img007 from '../../Assets/dubai-trending.jpg';
import img006 from '../../Assets/canada.jpg';
import img005 from '../../Assets/uk.jpg';
import img0015 from '../../Assets/canada-flag.png';
import img004 from '../../Assets/canada-flag.png';
import img002 from '../../Assets/U-S-A.jpg';
import img003 from '../../Assets/uk-flag.jpg';
import img001 from '../../Assets/italy-trending.jpg';
import img0012 from '../../Assets/schengen-flag.png';
import img0013 from '../../Assets/usa-flag.webp';
import img0014 from '../../Assets/uk-flag.png';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Modal from "./Modal";



const Service = () => {
    const {isOpen , setIsOpen}=useState(false);
   
    const [show,setShow]= useState({modal1:false,
        modal2:false,
        modal3:false,
        modal4:false,
        modal5:false,
        modal6:false,
        modal7:false,
        modal8:false,
        modal9:false},
        );
    return(
        <div>
            <Navigation path='services'/>
            <div className={styles.div000}>
               <div className={styles.p}> <h1>Visa Services</h1>
                <p >
                “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart.
                 But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your
                  consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” <br />
                  <strong>Anthony Bourdain.</strong> 
                </p>
                </div>
                <div className={styles.div001}>
                    <div  className={styles.div002}>
                        <img src={img001} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <img src={img0012} alt ='booking service'className={styles.img0012}/>
                        <div className={styles.text}>
                            <h2>Schengen Visa</h2>
                         
                        </div>
                        <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal1:true}})}>Details</button>
                        {show.modal1 && <Modal onClose={() => setShow(false)} show={show} 
                       headingmain="Schengen Visa"
                       image={img001}
                       property0="Booking Appointment "
                       property1="Documentation"
                       property2="Insurance Coverage"
                       property3=" Flight Booking"
                       property4="Hotel Booking"/>}
                        
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img002} alt ='booking service'className={styles.img002}/>
                        <div className={styles.div0021}>
                        <img src={img0013} alt ='booking service'className={styles.img0012}/>
                        <div className={styles.text}>
                            <h2>U.S Visiting Visa</h2>
                          
                        </div>
                        
                        <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal2:true}})}>Details</button>
                        {show.modal2 && <Modal onClose={() => setShow(false)} show={show} 
                       headingmain="U.S Visiting Visa"
                       image={img002}
                       property0="Booking Appointment "
                       property1="Documentation"
                       property2="Insurance Coverage"
                       property3=" Flight Booking"
                       property4="Hotel Booking"/>}
                        
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img005} alt ='booking service'className={styles.img002}/>
                        <div className={styles.div0021}>
                        <img src={img0014} alt ='booking service'className={styles.img0012}/>
                        <div className={styles.text}>
                            <h2>U.K Visa</h2>
                           
                        </div>
                        <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal3:true}})}>Details</button>
                        {show.modal3 && <Modal onClose={() => setShow(false)} show={show} 
                        headingmain="U.K Visa"
                        image={img005}
                        property0="Booking Appointment "
                        property1="Documentation"
                        property2="Insurance Coverage"
                        property3=" Flight Booking"
                        property4="Hotel Booking"/>}
                         
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img006} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <img src={img0015} alt ='booking service'className={styles.img0012}/>
                        <div className={styles.text}>
                            <h2>Canadian Visa</h2>
                            
                        </div>
                        <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal4:true}})}>Details</button>
                        {show.modal4 && <Modal onClose={() => setShow(false)} show={show} 
                        headingmain="Canadian Visa"
                        image={img006}
                        property0="Booking Appointment "
                        property1="Documentation"
                        property2="Insurance Coverage"
                        property3=" Flight Booking"
                        property4="Hotel Booking"/>}
                        
                        </div>
                    </div>
                    

                   
                </div>
              <div className={styles.p}> <h1>Holiday Packages</h1>
                <p >
                “A vacation helps to relieve stress and boredom, gives us a change of scenery, 
                provides us with adventure, and helps to bring us closer to the people in our lives.” <br /><strong>E. S. Woods.</strong> 
                </p>
                </div>
                <div className={styles.div001}>
                    <div  className={styles.div002}>
                        <img src={img007} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        
                        <div className={styles.text}>
                            <h2>Middle East</h2>
                            <p>
                            "Don't be a tourist, be a traveler."
                            </p>
                            <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal5:true}})}>Details</button>
                        {show.modal5 && <Modal onClose={() => setShow(false)} show={show} 
                      headingmain="Middle East"
                      image={img007}
                      property0="Booking Appointment "
                      property1="Documentation"
                      property2="Insurance Coverage"
                      property3=" Flight Booking"
                      property4="Hotel Booking"/>}
                         
                        </div>
                       
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img008} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <div className={styles.text}>
                            <h2>Maldives</h2>
                            <p>
                            "Don't be a tourist, be a traveler."
                            </p>
                            <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal6:true}})}>Details</button>
                        {show.modal6 && <Modal onClose={() => setShow(false)} show={show} 
                       headingmain="Maldives"
                       image={img008}
                       property0="Booking Appointment "
                       property1="Documentation"
                       property2="Insurance Coverage"
                       property3=" Flight Booking"
                       property4="Hotel Booking"/>}
                        </div>
                       
                        
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img009} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <div className={styles.text}>
                            <h2>Bali</h2>
                            <p>
                            "Don't be a tourist, be a traveler."
                            </p>
                            <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal7:true}})}>Details</button>
                        {show.modal7 && <Modal onClose={() => setShow(false)} show={show} 
                       headingmain="Bali"
                       image={img009}
                       property0="Booking Appointment "
                       property1="Documentation"
                       property2="Insurance Coverage"
                       property3=" Flight Booking"
                       property4="Hotel Booking"/>}
                        </div>
                       
                        
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img0010} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <div className={styles.text}>
                            <h2>Singapore</h2>
                            <p>
                            "Don't be a tourist, be a traveler."
                            </p>
                            <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal8:true}})}>Details</button>
                        {show.modal8 && <Modal onClose={() => setShow(false)} show={show} 
                        headingmain="Singapore"
                        image={img0010}
                        property0="Booking Appointment "
                        property1="Documentation"
                        property2="Insurance Coverage"
                        property3=" Flight Booking"
                        property4="Hotel Booking"/>}
                        </div>
                        
                        
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img0011} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <div className={styles.text}>
                            <h2>Thailand</h2>
                            <p>
                            "Don't be a tourist, be a traveler."
                            </p>
                            <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal9:true}})}>Details</button>
                        {show.modal9 && <Modal onClose={() => setShow(false)} show={show} 
                        headingmain="Thailand"
                        image={img0011}
                        property0="Booking Appointment "
                        property1="Documentation"
                        property2="Insurance Coverage"
                        property3=" Flight Booking"
                        property4="Hotel Booking"/>}
                        </div>
                        
                        
                        </div>
                    </div>
                    <div  className={styles.div002}>
                        <img src={img0021} alt ='booking service'className={styles.img001}/>
                        <div className={styles.div0021}>
                        <div className={styles.text}>
                            <h2>Any Other Locations?</h2>
                            <p>
                            Let's discuss then.
                            </p>
                            <button className={styles.button001}><a href="/contact_us">Contact Us</a></button>
                       
                        </div>
                        
                        
                        </div>
                    </div>

                   
                </div>
               
            </div>
            <Footer />
        </div>

    )
};

export default Service;