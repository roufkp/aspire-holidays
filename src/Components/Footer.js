import styles from './Footer.module.css';
import AspireLogo from '../Assets/Aspare-Logo2.png'
import { SocialIcon } from 'react-social-icons';
import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';


const Footer = () => {
return(
<div className={styles.div000}>
   <div className={styles.div008}>
   <div  className={styles.div001}>
      <div className={styles.div002}>
        <img className={styles.img001} src={AspireLogo} alt="aspirelogo"></img>
        <div className={styles.div009}>
        <SocialIcon url="https://www.instagram.com/aspireholidaysuk/?igshid=YmMyMTA2M2Y%3D" bgColor="transparent" fgColor="rgb(107 106 106)" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://facebook.com/" bgColor="transparent" fgColor="rgb(107 106 106)" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://www.linkedin.com/company/aspire-holidays-ltd/" bgColor="transparent" fgColor="rgb(107 106 106)" style={{ height: 40, width: 40 }}/>
                                        
        </div>
      </div>
      <div className={styles.div003}>
      <div className={styles.div005}><a href="/">Home</a></div>
      <div className={styles.div005}><a href="/about_us">About</a></div>
      <div className={styles.div005}><a href="/destinations">Destinations</a></div>
        <div className={styles.div005}><a href="/blog">Blog</a></div>
        <div className={styles.div005} ><a href="tel:+447470852767">Support</a></div>
        <div className={styles.div005}><a href="/contact_us">Contact Us</a></div>
        <div className={styles.div005}><a href="/admin">Admin</a></div>
        {/* <div className={styles.div005}><a href="/services">Packages</a></div> */}
        {/* <div className={styles.div005}>Terms & Conditions</div> */}

      </div>
      <div className={styles.div004}>
        <div className={styles.div007}>Get notifications of our latest packages</div>
        <input type='text' placeholder='Enter your e-mail address'></input>
        <button>Submit</button>
      </div>
   </div>
   </div> 
   <div className={styles.div006}>
      Copy right <span >&copy;</span> 2022 - 2024 All rights reserved. <br /> Powerd by <a href="http://www.beekey.xyz">Beekey.xyz</a>
   </div>
</div>)

};

export default Footer;