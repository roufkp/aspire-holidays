import './SideBar.css';
import { NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const SideBar = (props) => {
  console.log(props.menu,"****")
const onClickHandler = () => {
  console.log("clicked");}
return(
    <div id="container">
            <div className="backdrop" style={{display:props.show ? 'block' :'none'}} onClick={() => props.close()}></div> 
            <div id={`${props.show ? "lgMenu123": "lgMenu"}`}>
              <span id="exit" onClick={props.close}>&times;</span>
                <ul>
                  {props.menu.map((e) => <li key={e.name} className='li121' onClick={onClickHandler}><NavLink to={e.link} className='navlink0001'>{e.name}</NavLink></li>)}
                  
                </ul>
                <SocialIcon url="https://instagram.com/aspireholidaysltd?igshid=Yzg5MTU1MDY=" bgColor="transparent" fgColor="rgb(107 106 106)" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="https://facebook.com/" bgColor="transparent" fgColor="rgb(107 106 106)" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="https://www.linkedin.com/company/aspire-holidays-ltd/" bgColor="transparent" fgColor="rgb(107 106 106)" style={{ height: 40, width: 40 }}/>
            </div>
    </div>
)};

export default SideBar;
