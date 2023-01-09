import classes from './TripPlan.module.css';
import styles from './TripPlan.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const TripPlan = () => {

  function valuetext(value) {
    return `${value}°C`;
  };

  const [value, setValue] = useState([20, 90]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
     <form className={classes.form}>
        <div className={classes.div001}>
          <label>Where you want to go</label>
          <select>
            <option>( select )</option>
            <option>United Kingdom</option>
            <option>United States Of America</option>
            <option>Middl East</option>
            <option>Singapore</option>
          </select>
        </div>
        <div className={classes.div001}>
          <label>When you are planning</label>
          <select>
            <option>( select )</option>
            <option>1</option>
          </select>
        </div>
        <div className={classes.div001}>
          <label>Select Your Budget</label>
          <Box sx={{ width: '100%' }}>
        <Slider
             className="slider"
             min={0}
             max={10000}     
             getAriaLabel={() => 'Budget'}
             value={value}
             onChange={handleChange}
             valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            />
         </Box>
        </div>
        <button>Plan Your Trip</button>
     </form>


    )
}; 

export default TripPlan;