import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import img001 from '../Assets/dubai-trending.jpg';
import img002 from '../Assets/maldives-trending.jpg';
import img003 from '../Assets/paris-trending.jpg';
import img004 from '../Assets/italy-trending.jpg';
import img005 from '../Assets/bali.jpg';
import styles from '../Components/homeslider.module.css'

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

const HomeSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  useEffect(() => {
    if (isTablet) {
      setSlidesToShow(2);
    }
    if (isMobile) {
      setSlidesToShow(1);
    }
  }, [isTablet, isMobile]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows:true,
   // nextArrow:<SampleNextArrow/>,
    //prevArrow:<SamplePrevArrow/>
  };

  return (
    <div className={styles.div001}>
      <Slider className={styles.div002} {...settings}>
        <div className={styles.div003}>
          <img src={img001} width="230px" height="280px" alt="Slide 1" />
          <div  className={styles.caroText}>
                            Dubai
                    </div>
        </div>
        <div className={styles.div003}>
          <img src={img002} width="130px" height="280px" alt="Slide 2" />
          <div  className={styles.caroText}>
                            Maldives
                    </div>
        </div>
        <div className={styles.div003}>
          <img src={img003} width="230px" height="280px" alt="Slide 3" />
          <div  className={styles.caroText}>
                            Paris
                    </div>
        </div>
        <div className={styles.div003}>
          <img src={img004} width="230px" height="280px" alt="Slide 4" />
          <div  className={styles.caroText}>
                            Italy
                    </div>
        </div>
        <div className={styles.div003}>
          <img src={img005} width="230px" height="280px" alt="Slide 5" />
          <div  className={styles.caroText}>
                            Bali
                    </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
