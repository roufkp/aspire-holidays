import styles from './Testimonials.module.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import face1 from '../../Assets/face1.png';
import face2 from '../../Assets/face2.png';
import face3 from '../../Assets/face3.png';
import face4 from '../../Assets/face4.png';
import face5 from '../../Assets/face5.png';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { SocialIcon } from 'react-social-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState } from 'react';
import {PostAPI } from '../Api/ApiInterface';


const Testimonials = () => {

  const [testimonails, setTestimonials] = useState([]);

  
  const onGettTestimonials = (Data) => {
    setTestimonials(Data);
  } 


  const onFetchFullBLog = () => {
    
    PostAPI({path:"/getTestimonials"
    ,body:JSON.stringify({})
    ,type:'application/json'
    ,callbackfunc:onGettTestimonials
  });
  }; 


  useEffect(() => {
    onFetchFullBLog();
  },[]);


const testimonals = testimonails.map((e, i) => {
  return(
    <div className={styles.div001} key= {i}>
    <div className={styles.div002}>
      
      <div className={styles.div006}>
      <div className={styles.div004}>
        <p>{e.content}</p>
      </div>
      <div className={styles.div0030}>
      <div className={styles.div003}>
      <img className={styles.img000} src={e.prof_picture} alt='fbgirl'/>
      </div>
      <div className={styles.div005}>
        <h3>{e.name}</h3>
        <h5>{e.post}</h5>
      </div>
      </div>
      </div>
    </div>
   </div>)  
})


return(

    <div className={styles.div0000}>
        <div className={styles.head}>Testimonials</div>
        <div className={styles.div00}>
          {testimonals}
        </div>
    </div>
        
  
)
}; 

export default Testimonials;


