import React from "react";
import styles from "./Modal.module.css";
import {RiCloseLine} from "react-icons/ri";
import img001 from '../../Assets/europe-icon.png';
import Text from 'react-text';
import img0021 from '../../Assets/europe-icon.png';

function Modal(props){

    console.log(props)
    if(!props.show) {
        return null;
    }
    return(
        <div className={styles.modal}onClick={props.onClose}>           
                    <div className={styles.modalcont}>
                        <h1>{props.headingmain}</h1>
                        <button className={styles.closeBtn} onClick={props.onClose}><RiCloseLine /></button>
                        <img src={props.image} alt ='booking service'className={styles.img001}/>
                        <div  className={styles.div002} onClick={e => e.stopPropagation()}>
                           
                                <div className={styles.text}>
                                        <p>{props.detailtext}</p>                                     
                                
                                </div>
                                <h3 className={styles.servhead}>Services Provided</h3><br />
                                <div className={styles.serv}>
                                    
                                    <div className={styles.sty}> Booking Appointment</div>

<div className={styles.sty}> Documentation</div>

<div className={styles.sty}> Insurance Coverage</div>

<div className={styles.sty}> Flight Booking</div>

<div className={styles.sty}> Hotel Booking</div>
                                </div>

                                
                                   
                           
                        </div>
                        <button className={styles.button001}><a href="/contact_us">Instant Booking </a></button>
                    </div>
            
        </div>
         
    );
}
export default  Modal;
