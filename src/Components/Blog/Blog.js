import styles from './Blog.module.css';
import Navigation from '../Navigation';
import { useState, useEffect} from 'react';
import Footer from '../Footer';
import { useParams, useNavigate} from 'react-router-dom';
import { GetApI,PostAPI } from '../Api/ApiInterface';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import admin from '../../Assets/user.png';


const Blog = () => {

  const [showloader, setShowLoader] = useState(false);
  const [availableBlog, setAvailableBlog] = useState([]);
  const [edit,setEdit] = useState(false);
  const [blogInfo, setBlogInfo] = useState({});
  const params = useParams();
  const history = useNavigate();
  const [success,setSuccess]=useState(null);
  const [error,setError]=useState(null);

  const onLogountResponse =(Data) =>{
    if (Data.outcome === "success"){  
      setEdit(false)
      setSuccess({message:"Successfully Loged Out"})
    }else{
      console.log("error in api ",Data)
      setError({message:"Error In Lgout"})
    }
  };

  const onLogoutHandler = () => {
    PostAPI({path:"/logout"
    ,body:JSON.stringify({})
    ,type:'application/json'
    ,callbackfunc:onLogountResponse
  });
  };

  const onFetchFullBLog = (e) => {
  
    GetApI({path:"/getblogs/" + e , callbackfunc:getFullblogs}) 
  } 
  
  const  onFetchHandler = () => {
    GetApI({path:"/getblogs",callbackfunc:getblogs}) 
  };
  

  const getFullblogs = (Data) => {
    if (Data.outcome === "success"){
      console.log("tgyuio",Data)
      setBlogInfo(Data.blog)
      setEdit(Data.edit)
      history('/blog/' + Data.blog.uuid)
    }else{
      console.log("error in api ",Data)
    }
  };
  
  
  const getblogs = (Data) => {
     setShowLoader(false)
    if (Data.outcome === "success"){
      console.log("ssssssssss")
      setAvailableBlog(Data.blogs)
      setEdit(Data.edit)
    }else{
      console.log("error in api ",Data)
    }
  };

  useEffect(() => {
    setShowLoader(true);
    onFetchHandler()
    },[]);


    const img1path = blogInfo.img1?.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
    const img2path = blogInfo.img2?.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
    const DsiplayBlog =
    
    <div className={styles.div006}>
        <Navigation />
        <div className={styles.div0000}>
        <div className={styles.div00}>
        <h1>{blogInfo.head}</h1>
        <div className={styles.div002a}>
        <img  className={styles.img002} src={img1path} alt="paris"></img>
          <div className={styles.div007b}>
            {blogInfo.content1}
            {/* ?.split("<brakeo$qexc>").map(para => {if (para !== ''){return(<p>{para}</p>)}})} */}
          </div>          
        </div>
        <div className={styles.div002a}>
          <div className={styles.div007a}>
            {blogInfo.content2}
            {/* ?.split("<brakeo$qexc>").map(para => {if (para !== ''){return(<p>{para}</p>)}})} */}
          </div>    
           {/* <img  className={styles.img002} src={img2path} alt="traveling"></img>           */}
           {/* <h1 style={{color:"red"}}>jooooo</h1> */}
           <button onClick={() => window.history.back()}>Go Back</button>
        </div>
        {edit && <button onClick={() => history('/updateBlog/'+ blogInfo.uuid)}>Edit</button>}
        </div>
        </div>
        <Footer/>
        </div>;
        


    const BlogOutLook = availableBlog.map((e) =>{
     const img1pathu = e.img1.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
     console.log(img1pathu ,"bbbbbbb")
      console.log(e,"each blog");
      return(
          <div className={styles.div001}>
             <div className={styles.div002}>
                <img className={styles.img001} src={img1pathu} alt="blogimg"></img>
                <div className={styles.div003}>
                    <h1>{e.head}</h1>
                    {e.content1}
                    {/* // ?.split("<brakeo$qexc>").map(para => {if (para !== ''){return(<p>{para}</p>)}})}  */}
                </div>
             </div>
            <div className={styles.div004}>
            <button  onClick={() => onFetchFullBLog(e.uuid)}>View more</button>
            
            </div>
          </div>)}
    );
  

    return(
     <div>
      {params.forwardPath === undefined ?
      <div>
      <Stack sx={{ width: '50%', display:error?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
        <Alert onClose={() => {setError(null)}}>{error?.message}</Alert>
      </Stack>
      <Stack sx={{ width: '50%', display:success?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
       <Alert onClose={() => {setSuccess(null)}}>{success?.message}</Alert>
      </Stack>
        <Navigation path='blog'/>
        {showloader&& <div style={{width:"100vw",height:"70vh", display:"flex",alignItems:"center",justifyContent:"center"}}> <CircularProgress disableShrink /></div>}
        <div className={styles.div000}>
           {BlogOutLook}
           {!edit &&<button className={styles.button001} onClick={() => history('/adminlogin')}><img src={admin} alt="" /></button>}
        {edit&&<button className={styles.button001} onClick={onLogoutHandler}>Logout</button>}
        </div>
        
      
       <Footer />  
       </div>: DsiplayBlog }
     </div>

    )
};

export default Blog;
