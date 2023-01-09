import styles from './CoustomBand.module.css'

const CoustomBand = (props) => {

    return (
        <div className={styles.div000} style={{backgroundColor:props.color}}> 
           <div><h1>Need a Coustomized trip?</h1></div>
           <button className={styles.button} >Lest's Discuss</button>
        </div>

    )
};

export default CoustomBand;