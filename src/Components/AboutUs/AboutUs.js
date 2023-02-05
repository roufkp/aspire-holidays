import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from './AboutUs.module.css';
import meeting from '../../Assets/meeting_1.png';
import Text from 'react-text';
import img001 from '../../Assets/team.png';
import img002 from '../../Assets/team2.png';

const AboutUs = () => {

return(
    <div>
        <Navigation path='about_us'/>
        <div className={styles.div000}>

        <div className={styles.div007}>
           
        </div>

        <div className={styles.div001}>
        <img src={img001} alt="" />
            <h1>Company Profile</h1>
            <p>Aspire Holidays Ltd. commenced its operations in 2022 with a full bouquet of services, a team of travel and tourism professionals. 
                	Now it is connecting more people around the world and providing services in not just the UK but to the places 
                    where the customers want their services.Aspire holidays has its privileged customers as family and friends 
                        and is consistently growing its boundaries wider with more connections through our family. 

Aspire Holidays Ltd. a global travel network organisation, offers a full range of Travel Management Services in both Corporate
 and Leisure Travel.Our Philosophy is to focus on offering a comprehensive and extensive range of services which deliver strategic 
 value, innovative technology and true Travel consulting. With our team of dedicated professional, global network, and state of art technology.   
        </p>
        </div>
        <div className={styles.div002}>
            <div className={styles.div0021}>
            <img src={meeting} alt="discussion"/>
            </div>
            
            <div className={styles.div003}>
                <h1>Value We Carry</h1>
                <ul>
                    <li> <span></span> Treating customers as family and friends.</li>
                    <li> <span></span> Consistently expanding our reach and connections. </li>
                    <li> <span></span> Offering a comprehensive and extensive range of services. </li>
                    <li> <span></span> Delivering strategic value and innovative technology. </li>
                    <li> <span></span> Providing true travel consulting. </li>
                    <li> <span></span> Having a team of dedicated professionals. </li>
                    <li> <span></span> Operating with a global network. </li>
                    <li> <span></span> Utilizing state of the art technology. <span></span></li>

                </ul>
            </div>
        </div>
        <img src={img002} alt="" />
        <div className={styles.div004}>

            <div  className={styles.div005}>
                <h1>Why Us?</h1>
                <p>At Aspire Holidays Ltd., we pride ourselves on our commitment to providing our customers with the best travel experience possible.
                     As a global travel network organization, we have a wide reach and connections to ensure that we can provide our services wherever 
                     our customers want to go. Our team of dedicated professionals, global network, and state-of-the-art technology allow us to offer a 
                     comprehensive and extensive range of services, including travel management for both corporate and leisure travel. We treat our customers 
                     as family and friends, and our philosophy is to deliver strategic value, innovative technology and true travel consulting to ensure that 
                     every trip is a success. We are constantly expanding our reach and connections to provide more opportunities for our customers to explore 
                     the world. We are passionate about travel and we believe that this is reflected in the quality of our service. Choose Aspire Holidays Ltd.
                      and experience the difference.</p>
            </div>
            <div  className={styles.div005}>
                <h1>Our Motto</h1>
                <p>Connecting more people around the world and providing services in not just the UK but to the 
                    places where the customers want their services.</p>
                 <h1>Our Vision</h1>
                <p>To be a global travel network organization that offers a full range of Travel
                     Management Services in both Corporate and Leisure Travel.</p>
           
            </div>
        </div>
      </div>
        <Footer/>
    </div>
)

}; 


export default AboutUs;
