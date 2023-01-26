import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import AspareLogo  from '../Assets/Aspare-Logo.png'
import MenuIcon  from '../Assets/MenuIcon.png'
import classes from './Navigation.module.css';
import SideBar from './SideBar';   


const Navigation = (props) => {
  const menu = [{name:'Home',link:'/'},
  {name:'About Us',link:'/about_us'},
  {name:'Destinations',link:"/destinations"},
  //{name:'Services',link:"/services"},
  {name:'Blog',link:"/blog"},
  {name:'Contact Us',link:"/contact_us"}
]
const [state,setState] = useState(false)
const onClickHandler =() => {
setState(prev => !prev)
};
const homestyle = {backgroundColor:'#001c28'}
const secondaystyle = {backgroundColor:'#001c28'} 
return(
  <div className={classes.div002} style= {props.path === 'home' ? homestyle : secondaystyle}>
               <img className={classes.img001} src={AspareLogo} alt='AspareLogo'></img>
  <nav className={classes.nav}>
    <ul>
        <li>
        <NavLink style={{color:props.path === 'home'?'#ff6b06' : 'white'}} to="/">Home</NavLink>
        </li>
        <li>
        <NavLink  style={{color:props.path === 'about_us'?'#ff6b06' : 'white'}} to="/about_us"> About Us</NavLink>
        </li>
        <li>
        <NavLink style={{color:props.path === 'destinations'?'#ff6b06' : 'white'}} to="/destinations"> Destinations</NavLink>
        </li>
        {/*<li>
        <NavLink  style={{color:props.path === 'services'?'#ff6b06' : 'white'}} to="/services"> Services</NavLink>
        </li>*/}
        <li>
        <NavLink style={{color:props.path === 'blog'? '#ff6b06' : 'white'}} to="/blog"> Blog</NavLink>
        </li>
        <li>
        <NavLink style={{color:props.path === 'contact_us'? '#ff6b06' : 'white'}} to="/contact_us"> Contact Us</NavLink>
        </li>
        {/* <li>
          <div>
          <button className={classes.button2}> Login</button>
          <button className={classes.button1}>Sign up</button>
          </div>
        </li> */}
    </ul>
    <div className={classes.menuicon}  onClick={onClickHandler}>
    <img className={classes.img005} src={MenuIcon} alt='MenuIcon'></img>
    </div>

  </nav>
  <SideBar show={state} close={onClickHandler} menu={menu}/>
  </div>)

};

export default Navigation;
