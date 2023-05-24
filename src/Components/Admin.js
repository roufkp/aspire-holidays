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
import { GetApI, PostAPI } from '../Components/Api/ApiInterface';




const Admin = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [availableBlog, setAvailableBlog] = useState([]);
    const [testimonails, setTestimonials] = useState([]);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    console.log(availableBlog,"ddd",selectedTestimonial);
    const [edit,setEdit] = useState();
    const [blogInfo, setBlogInfo] = useState({});
    const history = useNavigate();

    const  onFetchHandler = () => {
      GetApI({path:"/getblogs",callbackfunc:getblogs}) 
    };
  


    const onGettTestimonials = (Data) => {
      setTestimonials(Data);
    } 
  
  
    const onFetchFullBLog = () => {
      
      PostAPI({path:"/getTestimonials"
      ,body:JSON.stringify({})
      ,type:'application/json'
      ,callbackfunc:onGettTestimonials
    });
      handleItemClick(1);
    }; 
 
   
    const [selectedBlog, setSelectedBlog] = useState(null);

    console.log(selectedBlog);

  

   
    function handleSelectBlog(blog) {
      setSelectedBlog(blog);
      
    }
    const getblogs = (Data) => {
      // setShowLoader(false)
     if (Data.outcome === "success"){
       console.log("ssssssssss,",Data);
       setAvailableBlog(Data.blogs);
      setEdit(1);

       setBlogInfo(Data.blog);

       history('/blog/' + Data.blog.uuid);

     }else{
       console.log("error in api ",Data)
     }
   };

   
   const onLogountResponse =(Data) =>{
    if (Data.outcome === "success"){  
      window.history.back();
    }else{
      console.log("error in api ",Data)
    }
  };

  const onLogoutHandler = () => {
    PostAPI({path:"/logout"
    ,body:JSON.stringify({})
    ,type:'application/json'
    ,callbackfunc:onLogountResponse
  });
  };


  //  const getFullblogs = (Data) => {
  //   if (Data.outcome === "success"){
  //     console.log("tgyuio",Data)
  //     setEdit(1)
  //     setBlogInfo(Data.blog)
  //     history('/blog/' + Data.blog.uuid)
  //   }else{
  //     console.log("error in api ",Data)
  //   }
  // };

  const handleSelectTestimonials = (e) => {
    setSelectedTestimonial(() => e);
  };

  const testimonals = testimonails.map((e) => {
    return(
      <div className={styles.div001} onClick ={() => handleSelectTestimonials(e)}>
      <div className={styles.div002}>
        
        <div className={styles.div006}>
          <div className={styles.div004}>
            <p>{e.content}</p>
          </div>
          <div className={styles.div0030}>
            <div className={styles.div003}>
              <img className={styles.img000} src={e.prof_picture} alt=''/>
            </div>
            <div className={styles.div005}>
              <h3>{e.name}</h3>
              <h5>{e.post}</h5>
            </div>
          </div>
      <button onClick={() => handleItemClick(3)} style={{margin:"20px auto"}}>Edit</button>

        </div>
      </div>
     </div>)  
  });

const a =  <Typography variant="h5" className={styles.defaultSection} style={{marginTop:"100px",fontSize:"14px"}}>
            Please press a button upload content.
           </Typography>;

const b = <div className={styles.fullScreen}> 
             {/* <button  onClick ={() => {setSelectedBlog(null); handleItemClick(2)}} style={{margin:"auto auto auto auto",width:"fit-content",position:"fixed",top:"100px",right:"100px"}}>Add</button> */}
            
             <div className= {styles.blogpage}>  

               <div className= {styles.bloglist}>
                 <h2>Blog List</h2>
                 <span></span>
                 <ul>
                    {availableBlog.map(blog => (                     
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
                 <p>{selectedBlog.content1}</p>
                 <button onClick={() => handleItemClick(2)} style={{marginBottom:"100px"}}>Edit Blog</button>
                 {/* {edit && <button onClick={() => history('/updateBlog/'+ blogInfo.uuid)}>Edit</button>} */}
               </div>
              ) : (<>
                      <p style={{margin:"100px auto 20px auto",textAlign:"center",color:"gray",fontSize:"14px"}} >Please select a blog from the list to edit available blogs</p>
                      <button  onClick ={() => {setSelectedBlog(null); handleItemClick(2)}} style={{width:"fit-content"}}>Add</button>
                  </>
            )}
         </div>
       </div>
      <div>
     </div>              
   </div>;

const c   =  <div className={styles.fullScreen}> 
              <div >
                <h1>Testimonial Section</h1>
                <span style={{height:"1px",width:"auto",maxWidth:"270px",margin:"auto",display:"block",background:"gray"}}></span>

                <button  onClick ={() => {setSelectedTestimonial(null); handleItemClick(3)}} style={{margin:"20px auto 30px auto"}} >Add Testimonial</button>
                {/* <span style={{height:"1px",width:"auto",maxWidth:"270px",margin:"auto",display:"block",background:"gray"}}></span> */}
              </div>
              <div className={styles.etst} style={{background:"transparent",maxWidth:"1100px",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
               {testimonals}                
              </div>
              </div>;


  function handleItemClick(index) {
    setActiveSection(index);
  };
  function handleItemClickedit(){
    console.log("setup the edit existing");
  }
    
  
   return(
        <>
            <Navigation/>
            <div className={styles.main}>
            <button className={styles.listItem} style={{marginTop:"10px",marginLeft:"0",zIndex:"1500",left:"20px",width:"60px",minWidth:"40px"}} onClick={() => window.history.back()}>
              <img src={back} alt="" style={{width:"20px"}} />
            </button>
            <div className={styles.dashboard}>
                {/* <div>
                    <img src={upload} alt="test"  style={{maxWidth:"0px"}}/>
                </div> */}
      <List className={styles.listContainer}>
        <ListItem className={styles.listItem}  onClick={() => {onFetchHandler(); handleItemClick(0)}} >
          <ListItemText primary="Blog" />
        </ListItem>
        {/* <ListItem className={styles.listItem}  onClick={() => handleItemClickedit(0)} >
          <ListItemText primary="Add Blog" />
        </ListItem> */}
        <ListItem className={styles.listItem}  onClick={() => onFetchFullBLog()}>
          <ListItemText primary="Testimonial" />
        </ListItem>

        <ListItem className={styles.listItem}  onClick={() => onLogoutHandler()}>
          <ListItemText primary="Lgout" />
        </ListItem>
        {/* <ListItem className={styles.listItem}  onClick={() => handleItemClickedit(1)}>
          <ListItemText primary="Add Testimonial" />
        </ListItem> */}
      </List>
      <div className={styles.sectionContainer}>
        {activeSection === null && a}
        {activeSection === 0 && b}
        {activeSection === 1 && c}
        {activeSection === 2 && <UpdateBlog init ={selectedBlog ? selectedBlog:{img1:null,head:"",content1:"",uuid:""}} />}
        {console.log(selectedTestimonial === null,"ppppppppppppp")}
        {activeSection === 3 && <div className={styles.ut}>
          <UpdateTestimonial
          backtoTestimonial =  {() => {selectedTestimonial(null); handleItemClick(1)}}
          init ={selectedTestimonial === null ? {name:'',post:'',content:'',prof_picture:'',uuid:""}:selectedTestimonial}/>
          </div>}
      </div>
    </div>

            </div>
        </>
    );

};
export default Admin;