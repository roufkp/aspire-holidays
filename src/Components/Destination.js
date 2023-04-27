import { useState } from "react";
import styles from './Destination.module.css';

import img6  from  '../Assets/picture_011.jpg';
import img7 from '../Assets/travelling-man.png';
const Destinations = () => {





return(
    <div className={styles.div000}>
       <div className={styles.div002}>
        <img src={img7} className={styles.img001}></img>
        <div className={styles.div003}>
            <h2></h2>
          <p>
          Our perspectives are widened and our worldview is changed as a result of travel. It enables us to discover other people's
           cultures and traditions as well as their histories. It may enable us to gain a deeper comprehension of the environment. 
           It might offer us fresh experiences and difficulties that can help us get over any anxieties or inhibitions we might have.
            Our interpersonal skills can be improved and our self-confidence can grow as a result. Travelling can be a wonderful way 
            to unwind and escape from the strains of daily life. A welcome change of pace and a way to unwind our minds and bodies can 
            be found in travelling and experiencing other cultures. We get a great chance to meet new people and form new friendships
             when we travel. Our social networks and interpersonal abilities may be developed as a result.
          </p>
          <a href="tel:+447467360046">
            <button>Learn More</button>
          </a>
        </div>
       </div>
    </div>
)

};

export default Destinations;