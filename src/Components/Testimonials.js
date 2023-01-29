import styles from './Testimonials.module.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import face1 from '../Assets/face1.png';
import face2 from '../Assets/face2.png';
import face3 from '../Assets/face3.png';
import face4 from '../Assets/face4.png';
import face5 from '../Assets/face5.png';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { SocialIcon } from 'react-social-icons';
import ScrollAnimation from 'react-animate-on-scroll';

const Testimonials = () => {

return(

    <div className={styles.div0000}>
        <div className={styles.head}>Testimonials</div>

        <div className={styles.div00}>
       
            
       
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Aspire Holidays Ltd. made planning our honeymoon a breeze. Their team of travel experts helped us find 
                          the perfect destination and accommodations that fit within our budget. We had an unforgettable experience. 
                          Thanks to John and his team. Highly recommend!</p>
                      </div>
                      <div className={styles.div0030}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={face1} alt='fbgirl'/>
                      </div>
                      <div className={styles.div005}>
                        <h3> Sarah and John Smith</h3>
                        <h5></h5>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Aspire Holidays Ltd. exceeded our expectations for our company's annual team-building retreat. The travel arrangements,
                           accommodations, and activities were all top-notch and tailored to our specific needs. We couldn't be happier with the
                            service we received. Special thanks to Emily and her team</p>
                      </div>
                      <div className={styles.div0030}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={face2} alt='fbgirl'/>
                      </div>
                      <div className={styles.div005}>
                        <h3> Michael Scott</h3>
                        <h5>CEO of Dunder Mifflin</h5>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Aspire Holidays Ltd. always exceeds my expectations. Their attention to detail and excellent service 
                          make for seamless and enjoyable trips. I highly recommend them. Thanks to Jane and her team.</p>
                      </div>
                      <div className={styles.div0030}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={face4} alt='fbgirl'/>
                      </div>
                      <div className={styles.div005}>
                        <h3>Rachel Green</h3>
                        <h5>owner of Central Perk Café</h5>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Aspire Holidays made planning my business trip a breeze. Their attention to detail and quick response to my needs was impressive. 
                          I will definitely be using their services again in the future.</p>
                      </div>
                      <div className={styles.div0030}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={face3} alt='fbgirl'/>
                      </div>
                      <div className={styles.div005}>
                        <h3>John D</h3>
                        <h5></h5>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Aspire Holidays exceeded my expectations for my honeymoon trip. They took
                           care of every detail and made sure we had the most magical time. I highly recommend their services to anyone planning a special trip. Thanks Aspire!</p>
                      </div>
                      <div className={styles.div0030}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={face5} alt='fbgirl'/>
                      </div>
                      <div className={styles.div005}>
                        <h3>Sarah W</h3>
                        <h5></h5>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>

        
           </div>
           
          
        </div>
        
  
)
}; 

export default Testimonials;


