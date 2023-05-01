import Navigation from './Navigation';
import styles from './admin.module.css';
import React, { useState } from 'react';
import UpdateBlog from '../Components/Blog/updateBlog';
// import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem,Paper, ListItemText, Typography } from '@material-ui/core';
import upload from "../Assets/upload.gif";
import UpdateTestimonial from './Testimonial/UpdateTestimonial';



const Admin = () => {
    const [activeSection, setActiveSection] = useState(null);

  function handleItemClick(index) {
    setActiveSection(index);
  };
    return(
        <>
            <Navigation/>
            <div className={styles.main}>
            <button className={styles.listItem} style={{marginTop:"30px",marginLeft:"0"}} onClick={() => window.history.back()}>Go Back</button>
            <div className={styles.dashboard}>
                <div>
                    <img src={upload} alt="test"  style={{maxWidth:"270px"}}/>
                </div>
      <List className={styles.listContainer}>
        <ListItem className={styles.listItem}  onClick={() => handleItemClick(0)}>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem className={styles.listItem}  onClick={() => handleItemClick(1)}>
          <ListItemText primary="Testimonial" />
        </ListItem>
      </List>
      <div className={styles.sectionContainer}>
        {activeSection === null ? (
          <Typography variant="h5" className={styles.defaultSection} style={{marginTop:"50px"}}>
            Please press a button upload content.
          </Typography>
        ) : (
          <div className={styles.fullScreen}>
            {activeSection === 0 ? (
              <div className={styles.section}>
                <UpdateBlog/>
              </div>
            ) : (
              <div className={styles.section}>
                <UpdateTestimonial/>
              </div>
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