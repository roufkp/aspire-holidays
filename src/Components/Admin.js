import Navigation from './Navigation';
import styles from './admin.module.css';
import React, { useState,useEffect } from 'react';
import UpdateBlog from '../Components/Blog/updateBlog';
// import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem,Paper, ListItemText, Typography } from '@material-ui/core';
import { useParams, useNavigate} from 'react-router-dom';
import upload from "../Assets/upload.gif";
import UpdateTestimonial from './Testimonial/UpdateTestimonial';
import back from "../Assets/back.png";
import { GetApI } from '../Components/Api/ApiInterface';





const Admin = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [availableBlog, setAvailableBlog] = useState([]);
    const [edit,setEdit] = useState(1);
    const [blogInfo, setBlogInfo] = useState({});
    const history = useNavigate();

  
    const  onFetchHandler = () => {
      GetApI({path:"/getblogs",callbackfunc:getblogs}) 
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
    const getblogs = (Data) => {
      // setShowLoader(false)
     if (Data.outcome === "success"){
       console.log("ssssssssss,",Data);
       setBlogInfo(Data.blog);
       setAvailableBlog(Data.blogs);
       history('/blog/' + Data.blog.uuid);
      setEdit(1);

     }else{
       console.log("error in api ",Data)
     }
   };
   const getFullblogs = (Data) => {
    if (Data.outcome === "success"){
      console.log("tgyuio",Data)
      setBlogInfo(Data.blog)
      // setEdit(1)
      // history('/blog/' + Data.blog.uuid)
    }else{
      console.log("error in api ",Data)
    }
  };



  function handleItemClick(index) {
    setActiveSection(index);
    

  };
    return(
        <>
            <Navigation/>
            <div className={styles.main}>
            <button className={styles.listItem} style={{marginTop:"10px",marginLeft:"0",position:"absolute",left:"20px",width:"60px",minWidth:"40px"}} onClick={() => window.history.back()}>
              <img src={back} alt="" style={{width:"20px"}} />
            </button>
            <div className={styles.dashboard}>
                {/* <div>
                    <img src={upload} alt="test"  style={{maxWidth:"0px"}}/>
                </div> */}
      <List className={styles.listContainer}>
        <ListItem className={styles.listItem}  onClick={() => handleItemClick(0)} >
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem className={styles.listItem}  onClick={() => handleItemClick(1)}>
          <ListItemText primary="Testimonial" />
        </ListItem>
      </List>
      <div className={styles.sectionContainer}>
        {activeSection === null ? (
          <Typography variant="h5" className={styles.defaultSection} style={{marginTop:"50px",fontSize:"14px"}}>
            Please press a button upload content.
          </Typography>
        ) : (
          <div className={styles.fullScreen}>
            {activeSection === 0 ? (<>
              {/* <div className={styles.section}>
                <div className={styles.side}>
                  test
                </div>
                <div className={styles.details}>

                </div>                
              </div> */}
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
                        {edit && <button onClick={() => history('/updateBlog/'+ blogInfo.uuid)}>Edit</button>}
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
                      {edit && <button onClick={() => history('/updateBlog/'+ blogInfo.uuid)}>Edit</button>}

                    </div>
                  ) : (
                    <p>Please select a blog from the list</p>
                  )}
                </div>
              </div>
              <UpdateBlog />
              </>
            ) : (<>
              <div className={styles.section}>
                <div className={styles.side}>
                  test
                </div>
                <div className={styles.details}>

                </div>                
              </div>
              <UpdateTestimonial/>
              </>
            )}
          </div>
        )}
      </div>
    </div>

            </div>
        </>
    )

};
export default Admin;