import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from './AboutUs.module.css';
import meeting from '../../Assets/meeting_1.jpg';
import Text from 'react-text';
import img001 from '../../Assets/team.png';

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
            <p>We are the leading travel agents of Varanasi. Our IATA code (14361863), we are member of TAAI ,TAFI, IAAI ,Incredible India!, IATO, OTOAI and officially
               appointed for Singapore High Commission. Aspire Holidays Ltd. commenced its operations in 1994 with a full bouquet of services, a team of travel and tourism
               professionals. Now it has grown to be one of the largest Travel Management Companies in Varanasi with each of its products and services being of the distinct
               quality. Aspire Holidays Ltd. a global travel network organization, offers a full range of Travel Management Services in both Corporate and Leisure Travel.
               Established in the year 1994 in Varanasi, we have a proven track record and stability, experience and delivering on promise.</p>
            <p>Over the years, we have grown to be the largest Travel Management Company in North India, with each of its product and service benchmarking the mark of
               quality. Our Philosophy is to focus on offering a comprehensive and extensive range of services which deliver strategic value, innovative technology and true
               Travel consulting. With our team of dedicated professional, global network, and state of art technology.</p>   
        </div>
        <div className={styles.div002}>
            <div className={styles.div0021}>
            <img src={meeting} alt="discussion"/>
            </div>
            
            <div className={styles.div003}>
                <h1>Value We Carry</h1>
                <ul>
                    <li> 1. Ethical and professional service. </li>
                    <li>  2. Integrity of thought and action. </li>
                    <li> 3. Honouring our commitments to all our clients. </li>
                    <li> 4. Providing genuine value through our products and services. </li>
                    <li> 5. Constantly searching for the new on all fronts. </li>
                    <li> 6. Empowering & motivating employees to realize their potential & caliberThe travel industries we handle are vast and comprise of several
                        sectors including air tickets , Hotel bookings, Meetings, Incentive tours conferences , events and travel Insurance. </li>
                </ul>
            </div>
        </div>
        <div className={styles.div004}>
            <div  className={styles.div005}>
                <h1>Why Us?</h1>
                <p>Tour My India Pvt. Ltd. is an award winning travel organization and excels with quality services from its experienced staffs.
                     Over the years the company has received positive feedbacks from its existing clients and hence one can expect a cordial reception.</p>
            </div>
            <div  className={styles.div005}>
                <h1>Our Motto</h1>
                <p>Customer satisfaction: It’s the prime motto of our business, which has helped us to build a good network with travellers from the farthest corners of the
                 world. The company today holds more than 100,000 satisfied travellers and is still framing the travel diaries of fresh clients</p>
            </div>
        </div>
      </div>
        <Footer/>
    </div>
)

}; 


export default AboutUs;
