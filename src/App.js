
import './App.css';
import styles from './App.css';
import Home from './Components/home';
import AboutUs from './Components/AboutUs/AboutUs';
import Destinations from './Components/Destinations/Destinations';
import Service from './Components/Service/Service';
import Blog from './Components/Blog/Blog';
import ContactUs from './Components/ContactUs/contactUs';
import { Route, Routes } from 'react-router-dom';
import React,{useState} from 'react';
import Login from './Components/Blog/login';
import UpdateBlog from './Components/Blog/updateBlog';
import MyForm from './Components/contactForm/ContactForm';
import Admin from './Components/Admin';




function App() {

  
  return (
    <div className="App">
                
      <Routes>
        <Route
           path="/"
           element= {<Home/>}/>
             <Route
           path="/adminLogin"
           element= {<Login/>}/> 
        <Route
           path="/about_us"
           element= {<AboutUs/>}/>
         <Route
           path="/destinations"
           element= {<Destinations/>}/>
         {/*<Route
           path="/services"
           element= {<Service />}/>*/}
         <Route
           path="/blog"
           element= {<Blog />}>
            <Route path=":forwardPath" element={<Blog/>}></Route>
            </Route>   
         <Route
           path="/contact_us"
           element= {<ContactUs />}/>  
           <Route
           path="/admin"
           element= {<Admin/>}/>  
          <Route
           path="/updateBlog"
           element={<UpdateBlog/>}>
            <Route path=":forwardPath" element={<UpdateBlog/>}></Route>
          </Route>       
        <Route
           path="*"
           element={<p>There's nothing here!</p>}/>  
      </Routes>
    </div>
  );
}

export default App;
