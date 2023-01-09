import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      deviceType:"desktop",
    },
    tablet: {
      breakpoint: { max: 1024, min: 509 },
      items: 2,
      slidesToSlide: 1 ,// optional, default to 1.
      deviceType:"tablet",
    },
    mobile: {
      breakpoint: { max: 509, min: 0 },
      items: 1,
      slidesToSlide: 1 ,// optional, default to 1.
      deviceType:"mobile",
    }
  };
  
  export default responsive;