import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Assets/greatwal.jpg';
import img2 from '../Assets/pyramid.jpg';
import img3 from '../Assets/seashore.jpg';
import styles from './herslider.module.css';
import dream from '../Assets/dream.png';
import plan from '../Assets/task.png';
import makeit from '../Assets/make-it-happen.png';

const FullScreenSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    if (sliderRef) {
      sliderRef.slickPlay();
    }
  }, [sliderRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    fade:true,
    arrows:false
  };
  console.log(sliderRef,"sdfcfff")

  return (
    <div className="full-screen-slider">
      <Slider ref={sliderRef =>{console.log(sliderRef,"..*88"); setSliderRef(sliderRef)}} {...settings}>
        <div className={styles.div001}>
        <div className={styles.div002a}>
              <div className={styles.div002}>
                <div className={styles.header}>
                Experience the Romance of Paris with Aspire Holidays
                </div>
                <div className={styles.subheader}>
               <p> Aspire Holidays offers the most romantic vacation destinations such as Paris, London, and Turkey.</p>
                </div>
                <div className={styles.calltoaction}>
                Plan your next romantic getaway today!
                <a href="tel:+447470852767"><button>Call Now</button></a>
                </div>
              </div>
              {/* <img src={img1} alt="Slide 1" /> */}
              <div className={styles.band}>
                    <button><img src={dream} alt="" /></button><button><img src={plan} alt="" /></button><button><img src={makeit} alt="" /></button>
                </div>
            </div>
        </div>
        <div className={styles.div0011}>
        <div className={styles.div002a}>
        <div className={styles.div002}>
            <div className={styles.header}>
            Discover Your Next Adventure
            </div>
            <div className={styles.subheader}>
            <p> Aspire Holiday offers a wide range of destinations for your next getaway.
             Browse our website and find your dream holiday today!</p>
            </div>
            <div className={styles.calltoaction}>
              Ready for your Adventure!
              <a href="tel:+447470852767"><button>Call Now</button></a>
            </div>
          </div>
          {/* <img src={img2}alt="Slide 2" /> */}
          <div className={styles.band}>
                <button><img src={dream} alt="" /></button><button><img src={plan} alt="" /></button><button><img src={makeit} alt="" /></button>
            </div>
            </div>
        </div>
        <div className={styles.div0012}>
        <div className={styles.div002a}>
        <div className={styles.div002}>
            <div className={styles.header}>
            Escape to Paradise with Aspire Holidays
            </div>
            <div className={styles.subheader}>
           <p> Aspire Holidays offers the most exotic and luxurious vacation destinations such as the Maldives, Bali, and the UAE.</p>
            </div>
            <div className={styles.calltoaction}>
            Book your dream vacation now! 
            <a href="tel:+447470852767"><button>Call Now</button></a>
            </div>
          </div>
          {/* <img src={img3} alt="Slide 3" /> */}
          <div className={styles.band}>
                <button><img src={dream} alt="" /></button><button><img src={plan} alt="" /></button><button><img src={makeit} alt="" /></button>
            </div>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default FullScreenSlider;
