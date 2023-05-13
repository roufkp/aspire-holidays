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
  const BlogOutLook = availableBlog;
  
 
  function handleSelectBlog(blog) {
    setSelectedBlog(blog);
    
  }



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
