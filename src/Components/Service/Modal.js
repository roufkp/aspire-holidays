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
                        <div  className={styles.div002} onClick={e => e.stopPropagation()}>
                            
                                    <img src={props.image} alt ='booking service'className={styles.img001}/>
                            <div className={styles.div0021}>
                                <div className={styles.text}>
                                        <h2>Package Details</h2>
                                        <p><Text className={styles.dot}>{'\u261E'}</Text> {props.property0}</p>
                                        <p><Text className={styles.dot}>{'\u261E'}</Text> {props.property1}</p>
                                        <p><Text className={styles.dot}>{'\u261E'}</Text> {props.property2}</p>
                                        <p><Text className={styles.dot}>{'\u261E'}</Text>  {props.property3}</p>
                                        <p><Text className={styles.dot}>{'\u261E'}</Text> {props.property4}</p>                                        
                                
                                </div>
                                
                            </div>        
                           
                        </div>
                        <button className={styles.button001}><a href="/contact_us">Instant Booking </a></button>
                    </div>
            
        </div>
         
    );
}
export default  Modal;
