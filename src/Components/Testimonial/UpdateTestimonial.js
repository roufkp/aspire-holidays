import styles from './UpdateTestimonial.module.css';
import React, { useState } from 'react';
import {PostAPI } from '../Api/ApiInterface';
import axios from 'axios';
import ConsoleLogger from 'hero-slider/dist/modules/ConsoleLogger';
import { SettingsInputSvideo } from '@mui/icons-material';




const UpdateTestimonial=(props)=>{
    const initUserData = props.init;

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
        }
      };

      const onUpdateTestimonials = (Data) => {
       console.log(Data);
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        if(userData.uuid){
         {PostAPI({path:"/updateTestimonial/" + userData.uuid
        ,body:JSON.stringify(userData)
        ,type:'application/json'
        ,callbackfunc:onUpdateTestimonials
          })};
        }else
        {
        const a = userData;
        delete a.uuid;    
        PostAPI({path:"/putTestimonials"
        ,body:JSON.stringify(a)
        ,type:'application/json'
        ,callbackfunc:onPostTestimonials
      })};
  };
      
    
 return(
    <>
    <div>
        <h2>Upload new Testimonial</h2>
        <form className={styles.testform} action="" onSubmit={handleSubmit} >
            <div className={styles.formsub}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" onChange={(event) => handleChange(event,"name")} value={userData.name} />
            </div>
            <div className={styles.formsub}>
                <label htmlFor="post">Company & Job Role</label>
                <input type="text" name="post" id="" onChange={(event) => handleChange(event,"post")} value={userData.post} />
            </div>            
            <div className={styles.formsub}>
                <label htmlFor="text">Comment</label>
                {/* <input type="text" name="text" id="" /> */}
                <textarea rows="5" name="text" cols="" onChange={(event) => handleChange(event,"content")} value={userData.content} ></textarea>
            </div>
            <div className={styles.formsubpic}>
                <label htmlFor="pic">Photo</label>
                <input type="file" name="fileInput" id="fileInput" onChange={(event) => onImageUpload(event)} value={useState.prof_picture}/> 
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