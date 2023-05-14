import styles from './UpdateTestimonial.module.css';
import React, { useState } from 'react';
import {PostAPI } from '../Api/ApiInterface';
import axios from 'axios';
import ConsoleLogger from 'hero-slider/dist/modules/ConsoleLogger';
import { SettingsInputSvideo } from '@mui/icons-material';




const UpdateTestimonial=()=>{
    const initUserData = {name:'',post:'',content:'',prof_picture:''};

    const [userData,setUserData] = useState(initUserData);
   console.log(userData,"%%%%%%%")
   
   
   const handleChange = (event,index) => {
        setUserData(prev => {
           return { ...prev,
               [index]:event.target.value }
        })
    }

    const onImageUpload = (e) => {
        e.preventDefault();
       
        const formData = new FormData();
        formData.append('document', e.target.files[0]);
        const headers = {'Content-Type': 'multipart/form-data'};
        axios.post('https://aspireholidaysltd.com/v1/uploadDocument', formData, { headers })
        .then(response => {
         console.log(response.data);
         setUserData(prev => {return({...prev, prof_picture:response.data})})
        })
        .catch(error => {
         console.error(error);
        // Handle any errors
        });
      };



   

      const onPostTestimonials = (Data) => {
        if(Data.uuid){
          console.log("uuid", Data.uuid);
          console.log("successfully enterd testi monial");
          setUserData()
        }
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        PostAPI({path:"/putTestimonials"
        ,body:JSON.stringify(userData)
        ,type:'application/json'
        ,callbackfunc:onPostTestimonials
      });
  
  };
      
    
 return(
    <>
    <div>
        <h2>Upload new Testimonial</h2>
        <form className={styles.testform} action="" onSubmit={handleSubmit} >
            <div className={styles.formsub}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" onChange={(event) => handleChange(event,"name")} />
            </div>
            <div className={styles.formsub}>
                <label htmlFor="post">Company & Job Role</label>
                <input type="text" name="post" id="" onChange={(event) => handleChange(event,"post")} />
            </div>            
            <div className={styles.formsub}>
                <label htmlFor="text">Comment</label>
                {/* <input type="text" name="text" id="" /> */}
                <textarea rows="5" name="text" cols="" onChange={(event) => handleChange(event,"content")} ></textarea>
            </div>
            <div className={styles.formsubpic}>
                <label htmlFor="pic">Photo</label>
                <input type="file" name="fileInput" id="fileInput" onChange={(event) => onImageUpload(event)} /> 
            </div>
            <div className={styles.formsub}>
                <button type='submit'>Upload</button>
            </div>

            
        </form>
    </div>
    </>
 )
};
export default UpdateTestimonial;