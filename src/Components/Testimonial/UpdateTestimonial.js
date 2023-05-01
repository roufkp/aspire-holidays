import styles from './UpdateTestimonial.module.css';
import React, { useState } from 'react';
import {PostAPI } from '../Api/ApiInterface';
import { upload } from '@testing-library/user-event/dist/upload';




const UpdateTestimonial=()=>{
    const [image, setImage] = useState(null);
    const [userData,setUserData] = useState({name:'',post:'',content:'',prof_picture:''});
   console.log(userData,image,"%%%%%%%")
    const handleChange = (event,index) => {

        setUserData(prev => {
           return { ...prev,
               [index]:event.target.value }
        })
    }

    const onUploadResponse =(Data) => {
     console.log(Data)
        };

    const onImageUpload = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
        const formData = new FormData();
        formData.append('document', image);
        PostAPI({path:"/uploadDocument"
          ,body:formData
          ,type:'multipart/form-data'
          ,callbackfunc:onUploadResponse
        });
      };

 return(
    <>
    <div>
        <h2>Upload new Testimonial</h2>
        <form className={styles.testform} action="">
            <div className={styles.formsub}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" onChange={(event) => handleChange(event,"name")} />
            </div>
            <div className={styles.formsub}>
                <label htmlFor="post">Company & Job Role</label>
                <input type="text" name="post" id="" onChange={(event) => handleChange(event,"post")} />
            </div>            
            <div className={styles.formsub}>
                <label htmlFor="text">Comment</label>
                {/* <input type="text" name="text" id="" /> */}
                <textarea rows="5" name="text" cols="" onChange={(event) => handleChange(event,"content")} ></textarea>
            </div>
            <div className={styles.formsubpic}>
                <label htmlFor="pic">Photo</label>
                <input type="file" name="pic" id="" onChange={(event) => onImageUpload(event)} />
            </div>
            <div className={styles.formsub}>
                <button type='submit'>Upload</button>
            </div>

            
        </form>
    </div>
    </>
 )
};
export default UpdateTestimonial;