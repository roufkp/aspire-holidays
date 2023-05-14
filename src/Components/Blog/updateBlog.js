import styles from './updateBlog.module.css';
import aspirelogo from '../../Assets/Aspare-Logo2.png';
import addicon from '../../Assets/addimage.png'
import {useState, useRef, useEffect} from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Modal from '../../Ui/modal';
import './updateBlog.css';
import { useNavigate,useParams} from 'react-router-dom';
import { GetApI,PostAPI } from '../Api/ApiInterface';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
// const axios = require('axios');
const FormData = require('form-data');


const init = {img1:null,head:"",content1:""};

const UpdateBlog =(props) => {
  const init = props.init;
const [showloader, setShowLoader] = useState({delete:false,update:false});    
const history = useNavigate();
const param =useParams();
console.log(param,"kkkk")
const [success,setSuccess]=useState(null);
const [error,setError]=useState(null);
const [BlogState, setBlogState] =useState(init);
const [images, setImage] = useState({img1:null});
const [showModal,setShowModal]= useState({m1:false,m2:false})
console.log(showModal)
const [cropData, setCropData] = useState({img1:"#"});
const [cropper, setCropper] = useState({img1:null});     
const imageRef = useRef(null);
const [showState,setShowState] = useState(false);
console.log(cropper)
const onChange = (e,Img) => {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImage(prev => {return{...prev,[Img]:reader.result}});
      };
      reader.readAsDataURL(files[0]);
    };
  
    const onContentHandler = (e,contentTag) => {
      const limit = 1386;
      if(e.target.value.length < limit){
            setBlogState((prev) => {return({...prev,[contentTag]:e.target.value})})
      }else{
            console.log(`you can't enter ${limit}`)
      }
    };

    const getCropData = (imgTag) => {
      console.log(cropper[imgTag])
      if (typeof cropper[imgTag] !== "undefined") {  
        setCropData(prev => 
          {return {...prev, [imgTag]: cropper[imgTag].getCroppedCanvas().toDataURL()}});
      }
    };

    const closeModal =(M) => {
        setShowModal(prev => {return{...prev,[M]:false}})
    };

    const displayModal =(M) => {
        setShowModal(prev => {return{...prev,[M]:true}})
    };
      
    const  onSubmitHandler = () => {
     
      const form = new FormData();
      form.append('img1', `${BlogState.img1}`);
      form.append('content1', `${BlogState.content1}`);
      form.append('head', `${BlogState.head}`);

      console.log("formdata", form)
      // setShowLoader((prev) => {return({...prev,update:true})}) 
       if(init.uuid){
        const path = "https://aspireholidaysltd.com/v1/updateblogs/" + init.uuid
        axiospost(path,form);
       }
      //   PostAPI({path:"/updateblogs/" + param.forwardPath
      //   ,body:body
      //   ,type:undefined
      //   ,callbackfunc:getblogs
      // });
    else{
      const path = 'https://aspireholidaysltd.com/v1/putblogs'
        axiospost(path,form);
      
      }
    //   PostAPI({path:"/putblogs"
    //   ,body:body
    //   ,type:undefined
    //   ,callbackfunc:getblogs
    // });
  
  //}
};

const axiospost = async (path, form) =>{
     console.log("axios request called")
     axios.post(
    path,
    form,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            'Cookie': 'aspire-x-auth-key=522r36fvbcbvc5qrwe65rfwytgdcv; Version=1; Path=/; SameSite=None; Secur'
        }
    }
).then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

// console.log(response,"axiospost")

} 

  const getblogs = (Data) => {
     setShowLoader((prev) => {return({...prev,update:false})}) 
      if (Data.outcome === "success"){
         setSuccess({message:"Succefully Blog Updated"}) 
      }else{
        setError({message:"Error in Updating Blog"}) 
      }
    };

    useEffect(()=>{
      if(param.forwardPath){
      onFetchFullBLog(param.forwardPath)
    }},[])

    const getFullblogs = (Data) => {
      if (Data.outcome === "success"){
        console.log("tgyuio",Data)
        setBlogState({img1:Data.blog.img1,
                      head:Data.blog.head,
                      content1:Data.blog.content1})
      }else{
        console.log("error in api ",Data)
      }
    };

  const onDeleteResponse =(Data) => {
    setShowLoader((prev) => {return({...prev,delete:false})}) 
      if (Data.outcome === "success"){
         setBlogState(init)
         setError({message:"successfully deleted"})
         history('/updateBlog')
        console.log("tgyuio",Data)}else{
          console.log("error in api ",Data)
        }
    }
    
 const onDeleteHandler =() =>{
  setShowLoader((prev) => {return({...prev,delete:true})}) 
  PostAPI({path:"/deleteblogs/"+ param.forwardPath
      ,body:JSON.stringify({})
      ,type:'application/json'
      ,callbackfunc:onDeleteResponse
    });
 }

 const onFetchFullBLog = (e) => {
    GetApI({path:"/getblogs/" + e , callbackfunc:getFullblogs}) 
  }; 
  
  const img1path = BlogState.img1?.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
  //const img2path = BlogState.img2?.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
 return(<div className={styles.div000}>
    <div className={styles.div001}>
    <Stack sx={{ width: '50%', display:error?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
      <Alert onClose={() => {setError(null)}}>{error?.message}</Alert>
    </Stack>
    <Stack sx={{ width: '50%', display:success?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
      <Alert onClose={() => {setSuccess(null)}}>{success?.message}</Alert>
    </Stack>
     {/* <img  className={styles.img001} src={aspirelogo} alt="aspirelogo"></img> */}
     
       </div>
      
     <div className={styles.div002} style={{display:!showState?"flex":"none"}}>
     <div className={styles.div008}>
        </div>
           <div className={styles.div003}>
           <div className={styles.div004}>
             <img src={BlogState.img1 === null?addicon:img1path} className={BlogState.img1 === null ? styles.img002:styles.img002a} alt='addimage' onClick={() => displayModal("m1")}></img>
           </div>
             <div className={styles.div005}>
              <input type="text" placeholder='Type Your Heading'  value={BlogState.head} onChange={(e) => setBlogState((prev) => {return({...prev,head:e.target.value})})}></input>    
              <textarea placeholder='Blog content'  id="text-area-first" value={BlogState.content1} onChange={(e) => onContentHandler(e,"content1")}></textarea>    
             </div>
           </div>
     </div>
     {/* <Modal show={showModal.m2} close={() => closeModal("m2")}>
     <div className='div003a'>
             <div className='div003'>
                    <div className='div0031' onClick={() => {closeModal("m2")}}>close</div>
                    <div className='div0032' onClick={() => 
                      {setBlogState((prev) => {return({ ...prev,"img2":cropData.img2})}); setCropData((prev) => {return({...prev,img2:'#'})}); closeModal("m2")}}>confirm</div>
                </div> 
               <div className='div002'>
              <div className={"cropbox"}>
              <Cropper
               style={{ height: 380, width: 450,backgroundColor:'whitesmoke'}}
               initialAspectRatio={9/8}
               preview=".img-preview"
               src={images.img2}
               ref={imageRef}
               viewMode={1}
               guides={true}
               minCropBoxHeight={300}
               minCropBoxWidth={350}
               background={false}
               responsive={true}
               checkOrientation={false} 
               onInitialized={(instance) => {
                setCropper(prev =>{return {...prev,img2:instance}})}}
               />
               <input type='file' onChange={(e)=> {onChange(e,"img2")}}></input>
               <button className="button001"  disabled={images.img2 ===  null? true:false} onClick={() => getCropData("img2")}>
                     Crop
              </button> 
               </div>
                <div
                 className="box"
                  >
                <img style={{height:'300px',marginTop:"40px", boxShadow:"0px 0px 2px black"}} src={cropData.img2} alt="" />
                </div>
                </div>
                </div>
                </Modal> */}
                <Modal show={showModal.m1} close={() => {console.log("onclose called"); closeModal("m1")}}>
             <div className='div003'>
                    <div className='div0031' onClick={() => {closeModal("m1")}}>close</div>
                    <div className='div0032' onClick={() => {setBlogState((prev) => {return({ ...prev,"img1":cropData.img1})}); setCropData((prev) => {return({...prev,img1:'#'})}); closeModal("m1")}}>confirm</div>
                </div> 
               <div className='div002'>
              <div className={"cropbox"}>
              <Cropper className='cropbox-content'
               initialAspectRatio={9/8}
               preview=".img-preview"
               src={images.img1}
               ref={imageRef}
               viewMode={1}
               guides={true}
               minCropBoxHeight={300}
               minCropBoxWidth={350}
               background={false}
               responsive={true}
               checkOrientation={false} 
               onInitialized={(instance) => {
                setCropper(prev =>{return {...prev,img1:instance}})}}
               />
               </div>
               
                <div  className="box">
                  <img  src={cropData.img1} alt="" />
                </div>
                </div>
                <div className="div003c">
                  <input type='file' onChange={(e)=> {onChange(e,"img1")}}></input>
                  <button  className="button001" disabled={images.img1 ===  null? true:false} onClick={() => getCropData("img1")}>
                        Crop
                  </button> 
                </div>

                </Modal>
                <div className={styles.btns}>
                    {showloader.update ?<CircularProgress disableShrink />:<button className={styles.button001} onClick={onSubmitHandler}>Update</button>}
                    {param.forwardPath && <button className={styles.button001} onClick={onDeleteHandler}>Delete</button>}
                    {showloader.delete ? <CircularProgress disableShrink />:<button className={styles.button002} onClick={() => history('/blog')}>Back</button>}
                  
                </div>
</div>)
};
export default UpdateBlog;