import classes from './TripPlan.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState,useRef} from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import emailjs from 'emailjs-com';


const TripPlan = (props) => {

  function valuetext(budget) {
    return `${budget}`;
  };
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const [budget, setBudget] = useState([20, 90]);
  const form = useRef();
  

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setBudget(newValue);
  };

 
  //send mail with email place datevalue budget here 
  

  function sendTravelPlanEmail(e) {
     e.preventDefault();
     const [start,endb] = budget;
  props.sendTravelPlanEmail({email:email,destination:place,date:dateValue,start:start,endb:endb})}

  //   emailjs.sendForm('service_xzd0lk4','template_g3g0r86',form.current,'t-7yIUnaGm76jTR6h')
  //   .then(res=>{
  //     alert("mail send succesfully")

  //   }).catch(err=> console.log(err))
  // }
  
  
  const today = new Date();
    return(
     <form className={classes.form } onSubmit={sendTravelPlanEmail}>
        <div className={classes.div001}>
          <label>Enter Your Mail</label>
        <Box  sx={{ Width: 230 }} >
            <TextField className={classes.box} style={{width:230}} id="email" label="Email" name='email'  value={email} variant="outlined" onChange={handleChangeEmail}/>
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
              name='destin'
              onChange={handleChangePlace}
             >
            <MenuItem value={0}></MenuItem>  
            <MenuItem value={"uk"}>UK</MenuItem>
            <MenuItem value={"usa"}>USA</MenuItem>
            <MenuItem value={"uae"}>Middle East</MenuItem>
            <MenuItem value={"singapore"}>Singapore</MenuItem>
            </Select>
          </FormControl>
          </Box>    
        </div>
        <div className={classes.div001}>
          <label>When you are planning</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DatePicker
           label="Date"
           name="date_"
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
             name="budget"
             onChange={handleChange}
             valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            />
         </Box>
        </div>
        <input className={classes.sub} type="submit" value="Plan your trip"/>
     </form>


    )
}; 

export default TripPlan;
