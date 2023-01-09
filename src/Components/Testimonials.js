import styles from './Testimonials.module.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import people001 from '../Assets/people_006.jpg';
import people002 from '../Assets/people_005.jpg';
import people003 from '../Assets/people_005.jpg';
import people004 from '../Assets/people_008.jpg';
import people005 from '../Assets/people_008.jpg';
import people006 from '../Assets/people_006.jpg';
import people007 from '../Assets/people_007.jpeg';
import people008 from '../Assets/people_008.jpg';
import people009 from '../Assets/people_009.jpg';
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
                      <div className={styles.div003}>
                      <img className={styles.img000} src={people005} alt='fbgirl'/>
                      </div>
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt quaerat qui vitae aliquid!
                          Quam consectetur, iusto esse nisi, atque nemo, numquam alias nesciunt adipisci accusantium iure cumque vero aliquid.</p>
                      </div>
                      <div className={styles.div005}>
                        <h3>Sanad</h3>
                        <h5>netstrautum</h5>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={people005} alt='fbgirl'/>
                      </div>
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt quaerat qui vitae aliquid!
                          Quam consectetur, iusto esse nisi, atque nemo, numquam alias nesciunt adipisci accusantium iure cumque vero aliquid.</p>
                      </div>
                      <div className={styles.div005}>
                        <h3>Sanad</h3>
                        <h5>netstrautum</h5>
                      </div>
                      </div>
                    </div>
                </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
                <div className={styles.div001}>
                    <div className={styles.div002}>
                      <div className={styles.div003}>
                      <img className={styles.img000} src={people005} alt='fbgirl'/>
                      </div>
                      <div className={styles.div006}>
                      <div className={styles.div004}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt quaerat qui vitae aliquid!
                          Quam consectetur, iusto esse nisi, atque nemo, numquam alias nesciunt adipisci accusantium iure cumque vero aliquid.</p>
                      </div>
                      <div className={styles.div005}>
                        <h3>Sanad</h3>
                        <h5>netstrautum</h5>
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


