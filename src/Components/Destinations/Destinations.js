import styles from './Destinations.module.css';
import Navigation from '../Navigation';
import CoustomBand from '../CoustomBand';
import Footer from '../Footer';
import Travel from '../../Assets/Explore.png';
import Modal from './Modal'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1  from '../../Assets/germany.jpg';
import img2  from '../../Assets/italy-trending.jpg';
import img3  from '../../Assets/paris-trending.jpg';
import img4  from '../../Assets/turkey.jpg';
import img5  from '../../Assets/switzerland.jpg';
import img6  from '../../Assets/Belgium.jpg';
import img7  from '../../Assets/London.jpg';
import img8  from '../../Assets/Albania.jpg';
import Flip from './Flip';
import ScrollAnimation from 'react-animate-on-scroll';

import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';


const Destinations = () => {
  const [offset, setOffset] = useState(0);
    const [planePosition, setPlanePosition] = useState([-220,30,0]);
    useEffect(() => {
      const onScroll = () => {
        setOffset(window.pageYOffset)
      //   setPlanePosition((prev) => {
      //  if (window.pageYOffset > prev[2]){
      //   return(
      //     [-220 + window.pageYOffset / 21.74, 30 - window.pageYOffset / 500, window.pageYOffset])
      //   }else{
      //     return(
      //     [-120 - window.pageYOffset / 21.74, 26 + window.pageYOffset / 500, window.pageYOffset])
      //   }
      //   })
      
      };

      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset,"scrolling")
  
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
         <Navigation path="destinations"></Navigation>
         <div className={styles.div000} style={{backgroundPosition: `${(offset/1.69875 - 300)}% ${( 30- offset/67.95)}%`}} onScroll={(event) => {console.log(event,"iiiiiiiii")}}>
         <div className={styles.div001}>
            <div className={styles.div002}>
              <img  className={styles.img001}src={Travel} alt='traveling couple'></img>
              <div className={styles.div003}>
                <h1>Explore the world</h1>
                <p>Travelling is one of the most popular ways to explore the world. Travel broadens our perspectives and alters our worldview. 
                  It allows us to learn about other people's cultures, traditions, and histories. It may allow us to gain a better understanding
                   of the environment. Travelling and experiencing other cultures can provide a welcome change of pace and a way to relax our minds
                    and bodies. When we travel, we have the opportunity to meet new people and form new friendships.</p>
              </div>
            </div>
         </div>

         <div className={styles.div06}>
              <h1 className={styles.head}>Our Destinations</h1>
              <div className={styles.div061} >
              
                      <div className={styles.div006}>
                          <img className={styles.img002} src={img1} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Germany</div>
                            <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal1:true}})}>Explore</button>
                            {show.modal1 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Germany"
                            image={img1}
                            detailtext="Germany, located in Central Europe, bordering the Baltic Sea is a city with a great mix of modernity and 
                            history, with beautiful historic architecture and cultural events. There are many opportunities to explore various regions
                             of the country, from the Black Forest to the Bavarian Alps. Germany is also known for its delicious cuisine, from hearty 
                             sausages to traditional beer and schnitzel. Whether you're looking for adventure, relaxation, or some of the best beer in
                              the world, Germany is one of the best tourist destinations you should consider."
                             />}
                          </div>
                      </div>
              

                      <div className={styles.div006}>
                          <img className={styles.img002} src={img2} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Italy</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal2:true}})}>Explore</button>
                            {show.modal2 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Italy"
                            image={img2}
                            detailtext=" Italy is located in Southern Europe, it is a beautiful country filled with some of the world's most 
                            stunning landscapes, historical sites, and cultural attractions. It is home to the birthplace of the Renaissance,
                             unique architecture, and exquisite cuisine. Italy offers a diverse range of experiences for travellers, from breathtaking views 
                             of the Alps and the Mediterranean Sea to the hustle and bustle of cities like 
                            Rome and Milan. Whether you're looking for a romantic getaway, a cultural adventure, or a relaxing beach vacation."
                             />}
                          </div>
                      </div>
                        <div className={styles.div006}>
                          <img className={styles.img002} src={img3} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Paris</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal3:true}})}>Explore</button>
                            {show.modal3 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Paris"
                            image={img3}
                            detailtext="Paris is one of the world's most iconic and romantic cities. The city has something to offer everyone from the 
                            iconic Eiffel Tower to the historic Notre Dame Cathedral. It provides a unique mix of art, culture, and history that you can
                             explore through its many museums, galleries, and iconic landmarks. You can also experience the famous Parisian nightlife, try 
                             delicious French cuisine, or just take a 
                            leisurely stroll along the Champs-Élysées or explore some of the most beautiful parks, gardens, and architecture in Europe."
                             />}
                          </div>
                      </div>
                        <div className={styles.div006}>
                          <img className={styles.img002} src={img4} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Turkey</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal4:true}})}>Explore</button>
                            {show.modal4 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Turkey"
                            image={img4}
                            detailtext="Turkey is known for its stunning coastal scenery, vibrant nightlife, and hospitable people. It is home
                             to some of the world’s most ancient sites, including the ancient city of Troy, Ephesus, and Hierapolis. It is also home 
                             to the world-famous Blue Mosque, the amazing underground city of Cappadocia, and incredible beaches. Turkey also boasts 
                             a thriving nightlife, with its vibrant 
                            cities and friendly locals. With so much to offer, Turkey is an ideal destination for the adventurous traveller."
                             />}
                          </div>
                      </div>
                        <div className={styles.div006}>
                          <img className={styles.img002} src={img5} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Switzerland</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal5:true}})}>Explore</button>
                            {show.modal5 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Switzerland"
                            image={img5}
                            detailtext="Switzerland is located in Central Europe, it is an incredibly beautiful alpine country that
                             is home to some of the most spectacular scenery in the world. From the majestic Alps to the pristine lakes 
                             and valleys, there is something for everyone. Whether you are looking for adventure or a relaxing holiday,
                              Switzerland has something for everyone. It also has a rich cultural heritage with a unique mix of German,
                               French, and Italian influences. Switzerland is also home to some of the best ski resorts in Europe,
                             making it a great destination for winter sports enthusiasts."
                             />}
                          </div>
                      </div>
                        <div className={styles.div006}>
                          <img className={styles.img002} src={img6} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Belgium</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal6:true}})}>Explore</button>
                            {show.modal6 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Belgium"
                            image={img6}
                            detailtext="Belgium is a beautiful country filled with interesting cities, historic sites, and stunning natural scenery. From its bustling 
                            capital of Brussels to its quaint medieval towns, Belgium has something to offer everyone. Whether you’re looking to explore the 
                            cobblestone streets of Bruges or take in the breathtaking views of the Ardennes, Belgium has plenty to offer in terms of both culture
                             and scenery. You can also sample some of Belgium’s delicious local cuisine, shop in its many boutiques, and relax in its cosy cafes.
                              With its historical monuments, beautiful landscapes, and delicious food, Belgium is a must-visit destination."
                             />}
                          </div>
                      </div>
                        <div className={styles.div006}>
                          <img className={styles.img002} src={img7} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>London</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal7:true}})}>Explore</button>
                            {show.modal7 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="London"
                            image={img7}
                            detailtext="London is filled with amazing attractions, iconic landmarks, and unique culture. From exploring the Tower of London to 
                            taking a stroll along the Thames, there is something for everyone in London. The city has world-class museums and galleries, a vibrant
                             nightlife, and incredible restaurants. London is also a great destination for shopping and sightseeing, with iconic stores
                             and attractions like Buckingham Palace, the London Eye, and more. Either you sit by Westminster bridge or go pub hopping in Soho."
                             />}
                          </div>
                      </div>
                        <div className={styles.div006}>
                          <img className={styles.img002} src={img8} alt="desiantion"/>
                          <div  className={styles.div005}>
                          <div className={styles.div004}>Albania</div>
                          <button className={styles.button001} onClick={()=> setShow(prev =>{return {...prev,modal8:true}})}>Explore</button>
                            {show.modal8 && <Modal className={styles.div004k}  onClose={() => setShow(false)} show={show}
                            headingmain="Albania"
                            image={img8}
                            detailtext="Albania is a country with many hidden gems and fascinating history that are sure to leave any 
                            traveller with unforgettable memories. From its stunning Adriatic and Ionian coastlines with beautiful beaches 
                            to its spectacular mountainous landscapes, you’ll find a unique and diverse range of activities to enjoy. With                            
                            its rich culture and friendly, hospitable people, Albania is a great place to visit and experience something different.
                             There are also plenty of cultural and historical attractions to explore, including archaeological sites, Ottoman-era
                              castles, and ancient cities."
                             />}
                          </div>
                      </div>
                     
              </div>
         </div>
         <CoustomBand />
         </div>
         <Footer/>
       </div>
    )
};

export default Destinations;