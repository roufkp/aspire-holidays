import styles from './login.module.css'
import Logo from '../../Assets/As-Lg.png';
import { useState,useEffect} from 'react';
import md5 from 'md5';
import { PostAPI } from '../Api/ApiInterface';




const Login =(props) => {
  const [state,setState]= useState({username:'',password:''});



  const userData = (Data) => {
    if (Data.outcome === "success"){
      props.updateAuth({outcome :"success"});
    }else{
      console.log("error in api ")
    }
  };

 const  onSubmitHandler = (e) => {
  e.preventDefault();
  PostAPI({path:"/login"
  ,body:JSON.stringify({...state,password:md5(state.password)})
  ,type:'application/json'
  ,callbackfunc:userData
})};

const onPassordChange = (p) => {
  const value = 
  setState((prev) => {return({...prev,password:p})})
};

return(  
<div className={styles.div000}>
    <div className={styles.div001}>
        <img  className={styles.img001} src={Logo} alt="aspirelogo"></img>
        <form className={styles.form}>
            <h1>Sign in</h1>
        <div className={styles.div001a}>
          <label>Username</label>
          <input type="text" placeholder="Username"  value={state.username} onChange={(e) =>setState((prev) => {return({...prev,username:e.target.value})})}></input> 
        </div>
        <div className={styles.div001a}>
          <label>Password</label>
          <input type="text" placeholder="password" value={state.password} onChange={(e) => onPassordChange(e.target.value)}></input> 
        </div>
        <button onClick={(e) => {onSubmitHandler(e)}}>Continue</button>
        </form>
    </div>
    
</div>)

};

export default  Login;