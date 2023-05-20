import styles from './UpdateTestimonial.module.css';
import React, { useState } from 'react';
import {PostAPI } from '../Api/ApiInterface';
import axios from 'axios';
//import ConsoleLogger from 'hero-slider/dist/modules/ConsoleLogger';
//import { SettingsInputSvideo } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Delete = async (props) => {
    const extendPath = props.path; 
    const object = {
        method:'DELETE', 
        headers: {'Content-Type':props.type},
        credentials: 'include',
        body:props.body}
    try{
      const response = await fetch("https://aspireholidaysltd.com/v1"+ extendPath, object)
      const data     = await response.json();
       props.callbackfunc(data)
      return(data)
    }catch(error){
       console.log(error)
       return("error")
    };
  };


const UpdateTestimonial= (props) => {
    const initUserData = props.init;
    
    const [userData,setUserData] = useState(initUserData);
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
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
        if(Data?.outcome === 'success'){
            setSuccess({message:'Successfully Added'});
           }else{
            setError({message:'Something went wrong'});
           }

      };

      const onUpdateTestimonials = (Data) => {
        console.log(Data,"ssssssss");
       if(Data?.outcome === 'success'){
        setSuccess({message:'Successfully updated'});
       }else{
        setError({message:'Something went wrong'});
       }
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

  const onDeleteResponse =(Data) => {
      if (Data.outcome === "success"){
         setSuccess({message:"successfully deleted"});
        console.log("tgyuio",Data)}else{
          console.log("error in api ",Data)
        }
    }
    
 const onDeleteHandler = (e) => {
  e.preventDefault()
  Delete({path:"/deleteTestimonial/"+ userData.uuid
      ,body:JSON.stringify({})
      ,type:'application/json'
      ,callbackfunc:onDeleteResponse
    });
 };
      
    
 return(
    <>
    <div>
      <Stack sx={{ width: '50%', display:error?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
          <Alert onClose={() => {setError(null)}}>{error?.message}</Alert>
      </Stack>
      <Stack sx={{ width: '50%', display:success?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
          <Alert onClose={() => {setSuccess(null)}}>{success?.message}</Alert>
      </Stack>
        <h2>Testimonial Section</h2>
        <span style={{display:"block",height:"1px",width:"100%",maxWidth:"270px",margin:"auto",background:"gray"}}></span>
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
                <input type="file" name="fileInput" id="fileInput" onChange={(event) => onImageUpload(event)} value={useState.prof_picture} style={{border:"none"}}/> 
            </div>
            <div className={styles.formsub}>
                <button type='submit'>Upload</button>
                {userData.uuid && <button type='Delete' onClick={(e) => onDeleteHandler(e)}>Delete</button>}
            </div>
        </form>
    </div>
    </>
 )
};
export default UpdateTestimonial;