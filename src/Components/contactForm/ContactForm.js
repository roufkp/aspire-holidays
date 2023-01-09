
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import styles from './ContactForm.module.css'
import emailjs from 'emailjs-com'

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const message = event.target.message;
      
      setInputs(values => ({...values, [name]: value}))
    }
   
  
   
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_xzd0lk4','template_14zye1v',e.target,'t-7yIUnaGm76jTR6h')
      .then(res=>{
        alert("mail send succesfully")

      }).catch(err=> console.log(err))
    }
  
    return (
      <form  onSubmit={sendEmail}>
        <label>e-mail:
        <input 
          type="text" 
          name="user_email" 
        />
        </label>
        <label>Mobile Number:
          <input 
            type="TEXT" 
            name="num" 
          />
          </label>
          
          {/* <label>Select service:
            <select>
            <option>( select )</option>
            <option>United Kingdom</option>
            <option>United States Of America</option>
            <option>Middl East</option>
            <option>Singapore</option>
          </select>
          </label> */}
          <label >Message:
          <input  className={styles.msg}
            type="text" 
            name="message" 
          />
          </label>
         
          <input className={styles.sub} type="submit" value="send"/>
      </form>
    )
  }

export default MyForm;