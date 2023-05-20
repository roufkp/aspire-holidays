import Admin from './Admin';
import Login from './Blog/login';
import { PostAPI } from './Api/ApiInterface';
import { useState ,useEffect} from 'react';
import styles from './AuthAdmin.module.css';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const AuthAdmin = () => {
   const [auth,setAuth] = useState(false);
   const [load, setLoad] = useState(true);

    const userData = (Data) => {
        if (Data.outcome === "success"){
          setAuth(true)
        }else{
          setAuth(false)  
          console.log("error in api ")
        };
        setLoad(false);
    };

    useEffect(()=> {
        PostAPI({path:"/login"
        ,body:JSON.stringify({})
        ,type:'application/json'
        ,callbackfunc:userData
      })
      },[]);
      
if(load){
  
return(
  <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
  <Stack sx={{ width: '100%', color: 'grey.500'}} spacing={2}>
    <LinearProgress color="secondary" />
    <LinearProgress color="success" />
    <LinearProgress color="inherit" />
  </Stack>
  </div>)
}
else{
  if(!auth){
    return(<Login updateAuth= {(e) => userData(e)}/>)
  }else{
    return(<Admin/>)
  }
}};

export default AuthAdmin;
