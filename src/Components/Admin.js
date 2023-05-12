import Navigation from './Navigation';
import styles from './admin.module.css';
import React, { useState } from 'react';
import UpdateBlog from '../Components/Blog/updateBlog';
// import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem,Paper, ListItemText, Typography } from '@material-ui/core';
import upload from "../Assets/upload.gif";
import UpdateTestimonial from './Testimonial/UpdateTestimonial';
import back from "../Assets/back.png";



const Admin = () => {
    const [activeSection, setActiveSection] = useState(null);

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
              <div className={styles.section}>
                <div className={styles.side}>
                  test
                </div>
                <div className={styles.details}>

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