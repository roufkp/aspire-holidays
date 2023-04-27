import styles from './CoustomBand.module.css'

const CoustomBand = (props) => {

    return (
        <div className={styles.div000} style={{backgroundColor:props.color}}> 
           <div><h1>Need a Coustomized trip?</h1></div>
           <a href="tel:+447470852767"><button className={styles.button}>Let's Discuss</button></a>
           
        </div>

    )
};

export default CoustomBand;