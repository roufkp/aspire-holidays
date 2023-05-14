import React, { useState } from 'react';
import styles from './Blog.module.css';
// import img1pathu from '../../Assets/Albania.jpg';
import Navigation from '../Navigation';
import { useEffect} from 'react';
import Footer from '../Footer';
import { GetApI } from '../Api/ApiInterface';

function Blog() {
  const [availableBlog, setAvailableBlog] = useState([]);
  
  const  onFetchHandler = () => {
    GetApI({path:"/getblogs",callbackfunc:getblogs}) 
  };

  const getblogs = (Data) => {
    // setShowLoader(false)
   if (Data.outcome === "success"){
     console.log("ssssssssss")
     setAvailableBlog(Data.blogs)
    //  setEdit(Data.edit)
   }else{
     console.log("error in api ",Data)
   }
 };

  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    // setShowLoader(true);
    onFetchHandler()
    },[]);



    // const img1path = blogInfo.img1?.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
    // const img2path = blogInfo.img2?.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
    // const DsiplayBlog =
    
    // <div className={styles.div006}>
    //     <Navigation />
    //     <div className={styles.div0000}>
    //     <div className={styles.div00}>
    //     <h1>{blogInfo.head}</h1>
    //     <div className={styles.div002a}>
    //     <img  className={styles.img002} src={img1path} alt="paris"></img>
    //       <div className={styles.div007b}>
    //         {blogInfo.content1}
    //         {/* ?.split("<brakeo$qexc>").map(para => {if (para !== ''){return(<p>{para}</p>)}})} */}
    //       </div>          
    //     </div>
    //     <div className={styles.div002a}>
    //       <div className={styles.div007a}>
    //         {blogInfo.content2}
    //         {/* ?.split("<brakeo$qexc>").map(para => {if (para !== ''){return(<p>{para}</p>)}})} */}
    //       </div>    
    //        {/* <img  className={styles.img002} src={img2path} alt="traveling"></img>           */}
    //        {/* <h1 style={{color:"red"}}>jooooo</h1> */}
    //        <button onClick={() => window.history.back()}>Go Back</button>
    //     </div>
    //     {edit && <button onClick={() => history('/updateBlog/'+ blogInfo.uuid)}>Edit</button>}
    //     </div>
    //     </div>
    //     </div>;
        


    // const BlogOutLook = availableBlog.map((e) =>{
    //  const img1pathu = e.img1.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg');
    //  console.log(img1pathu ,"bbbbbbb")
    //   console.log(e,"each blog");
    //   return(
    //       <div className={styles.div001}>
    //          <div className={styles.div002}>
    //             <img className={styles.img001} src={img1pathu} alt="blogimg"></img>
    //             <div className={styles.div003}>
    //                 <h1>{e.head}</h1>
    //                 {e.content1}
    //                 {/* // ?.split("<brakeo$qexc>").map(para => {if (para !== ''){return(<p>{para}</p>)}})}  */}
    //             </div>
    //          </div>
    //         <div className={styles.div004}>
    //         <button  onClick={() => onFetchFullBLog(e.uuid)}>View more</button>
            
    //         </div>
    //       </div>)}
    // );
    
  const BlogOutLook = availableBlog;
  
 
  function handleSelectBlog(blog) {
    setSelectedBlog(blog);
    
  }


    // return(
    //  <div>
    //   {params.forwardPath === undefined ?
    //   <div>
    //   <Stack sx={{ width: '50%', display:error?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
    //     <Alert onClose={() => {setError(null)}}>{error?.message}</Alert>
    //   </Stack>
    //   <Stack sx={{ width: '50%', display:success?'block':'none',position:"fixed",marginTop:'10rem' }} spacing={2}>
    //    <Alert onClose={() => {setSuccess(null)}}>{success?.message}</Alert>
    //   </Stack>
    //     <Navigation path='blog'/>
    //     {showloader&& <div style={{width:"100vw",height:"70vh", display:"flex",alignItems:"center",justifyContent:"center"}}> <CircularProgress disableShrink /></div>}
    //     <div className={styles.div000}>
    //        {BlogOutLook}
    //        {!edit &&<button className={styles.button001} onClick={() => history('/adminlogin')}><img src={admin} alt="" /></button>}
    //     {edit&&<button className={styles.button001} onClick={onLogoutHandler}>Logout</button>}
    //     </div>
    //    <Footer />  
    //    </div>: DsiplayBlog }
    //  </div>



  return (
    <>
    <Navigation path='blog' />
     
    <div className= {styles.blogpage}>
    
      <div className= {styles.bloglist}>
        <h2>Blog List</h2>
        <span></span>
        <ul>
          {BlogOutLook.map(blog => (
            
            
            <div className={styles.blogitem}>
            
            <li key={blog.id}>
              <a href="#" onClick={() => handleSelectBlog(blog)}>
              <img src={blog.img1.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg')} alt="" />
              <h3>{blog.head}</h3>
              </a>
            </li>
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.blogdetails}>
        {/* <h2>Blog Details</h2> */}
       
        {selectedBlog ? (
          <div>
            <h2>{selectedBlog.head}</h2>
            <span></span>
            <img src={selectedBlog.img1.replace('/opt/digitalocean/assets','https://aspireholidaysltd.com/v1/blogimg')} alt="" />

            {/* <p>Author: {selectedBlog.author}</p> */}
            <p>{selectedBlog.content1}</p>
          </div>
        ) : (
          <p>Please select a blog from the list</p>
        )}
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Blog;
