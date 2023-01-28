import classes from './TripPlan.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const TripPlan = () => {

  function valuetext(budget) {
    return `${budget}`;
  };
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const [budget, setBudget] = useState([20, 90]);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setBudget(newValue);
  };

  const onSubmitHandler = (event)=>{
    event.preventDefault();
  //send mail with email place datevalue budget here 
  }
  const today = new Date();
    return(
     <form className={classes.form}>
        <div className={classes.div001}>
          <label>Enter Your Mail</label>
          <Box sx={{ minWidth: 120 }} >
            <TextField id="email" label="Email"  value={email} variant="outlined" onChange={handleChangeEmail}/>
        </Box> 
        </div>
        <div className={classes.div001}>
          <label>Where you want to go?</label>
          <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={place}
              label="Destination"
              onChange={handleChangePlace}
             >
            <MenuItem value={0}></MenuItem>  
            <MenuItem value={10}>UK</MenuItem>
            <MenuItem value={20}>USA</MenuItem>
            <MenuItem value={30}>Middle East</MenuItem>
            <MenuItem value={40}>Singapore</MenuItem>
            </Select>
          </FormControl>
          </Box>    
        </div>
        <div className={classes.div001}>
          <label>When you are planning</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DatePicker
           label="Date"
           minDate={today}
           value={dateValue}
           onChange={(newValue) => {
            setDateValue(newValue);
           }}
            renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
        </div>
        <div className={classes.div001}>
          <label>Select Your Budget($)</label>
          <Box sx={{ width: '100%' }}>
        <Slider
             className="slider"
             min={0}
             max={10000}     
             getAriaLabel={() => 'Budget'}
             value={budget}
             onChange={handleChange}
             valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            />
         </Box>
        </div>
        <button onClickCapture={onSubmitHandler}>Plan Your Trip</button>
     </form>


    )
}; 

export default TripPlan;