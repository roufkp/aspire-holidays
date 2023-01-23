import { Propane } from '@mui/icons-material';
import styles from './modal.module.css';


const Modal = (props) => {
   return( 
 <div>
  <div className={styles.backdrop} style={{display:props.show ? 'flex': 'none' }} >
   {/* onClick={() => props.oclose()} */}
  <div className={props.show ? styles.div001 :styles.div001close}>
    {props.children}
  </div>
  </div>  
</div>)

};


export default Modal;