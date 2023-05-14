import { json } from "react-router-dom";

const BasePath = 'https://aspireholidaysltd.com/v1';

export const GetApI = async (props) => {
  try{
    console.log(BasePath, props.path)
    const object =  {
              method:'GET', 
              headers: {'Content-Type':'application/x-www-form-urlencoded'},
              credentials: 'include'}
    const response = await fetch(BasePath + props.path,object)
    const data     = await response.json();
    props.callbackfunc(data)
  }catch(error){
     props.callbackfunc({"outcome":"failed"})
     console.log(error,"dfvd")
     return("error")
  };
};

export const PostAPI = async (props) => {
    const extendPath = props.path; 
    const object = {
        method:'POST', 
        headers: {'Content-Type':props.type},
        credentials: 'include',
        body:props.body}
    try{
      const response = await fetch(BasePath + extendPath, object)
      const data     = await response.json();
       props.callbackfunc(data)
      return(data)
    }catch(error){
       console.log(error)
       return("error")
    };
  };

  export const PostEmailAPI = async (props) => {
    const body = {
      'from': {
          'email': 'sanadca1998@gmail.com'
      },
      'subject': 'ugfdrdtfyguippk;',
      'personalizations': [
          {
              'to': [
                  {
                      'email': 'info@aspireholidaysltd.com'
                  }
              ],
              'dynamic_template_data': props.body
          }
      ],
      'template_id': props.template_id
  };
    const object = {
        method:'POST',
        //crossorigin:true,
        headers: {'Content-Type':'application/json',
                  'Authorization': 'Bearer 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'},
        credentials: 'include',
        body:JSON.stringify(body)}
    try{
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', object)
      const data     = await response.json();
       props.callbackfunc(data)
      return(data)
    }catch(error){
       console.log(error)
       return("error")
    };
  };










export const put_api = async (props) => {
    const extendPath = props.path;
    const body = props.body; 
    const object = {
        method:'PUT', 
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(body)}
    try{
      const response = await fetch(BasePath + extendPath, object)
      const data     = await response.json();
      console.log(data,"pppppppppppppppppp")
      return(data)
    }catch(error){
       console.log(error)
       return("error")
    };
  };

  export const delete_api = async (props) => {
    const extendPath = props.path;
    const body = props.body; 
    const object = {
        method:'DELETE', 
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(body)}
    try{
      await fetch(BasePath + extendPath, object);
      return('success fully deleted')
    }catch(error){
       console.log(error)
       return("error")
    };
  };