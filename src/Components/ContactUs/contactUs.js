import styles from './contactUs.module.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { SocialIcon } from 'react-social-icons';
import MyForm from '../contactForm/ContactForm';

const ContactUs = () => {
    
    return(
     <div>
        <Navigation path='contact_us'/>
        <div className={styles.div001}>
            <div className={styles.div0012}>
                <h1>Contact Us On</h1>
                
                   <div className={styles.myform}>
                    <MyForm/>
                   </div>
                <div className={styles.div002}>
                    <div className={styles.div003}>
                    <SocialIcon url="https://instagram.com/in/jaketrent" fgColor="transparent" bgColor="whitesmoke" style={{ height: 35, width: 35 }}/>
                       
                    </div>
                    <div className={styles.div003}>
                    <SocialIcon url="https://linkedin.com/in/jaketrent" fgColor="transparent" bgColor="whitesmoke" style={{ height: 35, width: 35 }}/>
                     
                    </div>
                    <div className={styles.div003}>
                    <SocialIcon url="https://facebook.com/in/jaketrent" fgColor="transparent" bgColor="whitesmoke" style={{ height: 35, width: 35 }}/>
                      
                    </div>
                    <div className={styles.div003}>
                    <SocialIcon url="https://google.com/in/jaketrent" fgColor="transparent" bgColor="whitesmoke" style={{ height: 35, width: 35 }}/>
                      
                    </div>
                </div> 
                <div className={styles.div004}>
                <h2>Talk to Our Customer Care Executive</h2> 
                <button>Make a Call</button> 
                </div>
            </div>
        </div>
        <Footer /> 
     </div>

    )
};

export default ContactUs;
