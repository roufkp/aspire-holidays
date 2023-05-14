import React from 'react';

import { useState, useRef } from "react";
//import ReactDOM from 'react-dom/client';
import styles from './ContactForm.module.css'
//import emailjs from 'emailjs-com';
import { PostAPI  } from '../Api/ApiInterface';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function MyForm() {
    ///const [inputs, setInputs] = useState({});
    const nameref = useRef();
    const emailref  = useRef();
    const phoneref = useRef();
    const messageref = useRef()


    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);

const MailHandler = (Data) => {
        if (Data.outcome === "success"){
            setSuccess({message:"Succefully Submitted"})
        }else{
          setError({message:"Failed to Sumbit"})
        }
       
      };

function sendContactFromEmail(){
 const body =  {name:nameref.current.value
  ,phonenumber: phoneref.current.value
  ,message :messageref.current.value
  ,email: emailref.current.value
};
  // PostEmailAPI ({
  //   body:body,
  //   template_id: 'd-9efcd6aae1294d1f96db5c41d3d1a127'
  //   ,callbackfunc:MailHandler
  // })}


PostAPI({path:"/send_contact_form"
    ,body:JSON.stringify(
      {name:nameref.current.value
       ,phonenumber: phoneref.current.value
       ,message :messageref.current.value
       ,email: emailref.current.value
    })
    ,type:'application/json'
    ,callbackfunc:MailHandler
  })}

    // const handleChange = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   const message = event.target.message;
      
    //   setInputs(values => ({...values, [name]: value}))
    // }
   
  
   
    function sendEmail(e) {
      e.preventDefault();
       sendContactFromEmail();
      // emailjs.sendForm('service_xzd0lk4','template_14zye1v',e.target,'t-7yIUnaGm76jTR6h')
      // .then(res=>{
      //   alert("mail send succesfully")

      // }).catch(err=> console.log(err))
}
  
    return (
      <div>
       <Stack sx={{ width: '50%', display:error?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
           <Alert onClose={() => {setError(null)}}>{error?.message}</Alert>
         </Stack>
         <Stack sx={{ width: '50%', display:success?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
           <Alert onClose={() => {setSuccess(null)}}>{success?.message}</Alert>
        </Stack>    
      <form  onSubmit={sendEmail}>
         <label>Name:
        <input 
          ref={nameref}
          type="text" 
          name="name" 
        />
         </label>
        <label>E-mail:
        <input 
          ref ={emailref}
          type="text" 
          name="user_email" 
        />
        </label>
        <label>Mobile Number:
          <input 
            ref={phoneref}
            type="TEXT" 
            name="num"
          />
          </label>
          <label >Message:
          <input  className={styles.msg}
            ref={messageref}
            type="text" 
            name="message" 
          />
          </label>
         
          <input className={styles.sub} type="submit" value="Send"/>
      </form>
      </div>
    )
  }
export default MyForm;
