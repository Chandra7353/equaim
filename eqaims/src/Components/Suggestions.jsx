import React, { useEffect, useRef } from "react";
import  axios from "axios"
import { useNavigate } from "react-router-dom";

export const Suggestions = () => {
let navigate= useNavigate()

let title = useRef()
let category = useRef()
let details = useRef()

    useEffect(() => {

        localStorage.getItem("token")
    
      }, [])


    let addfeedback=(e)=>{
        e.preventDefault()
    

    let data = JSON.stringify({
      title: title.current.value,
      category: category.current.value,
      details: details.current.value
    });
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/api/suggestion/feedback',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        data : data
      };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      navigate("/edit")
    })
    .catch((error) => {
      console.log(error);
    });
    
    }
    return (
        <div className="mainbody">

            <div className="content">
               <div className="text">
                  Create New Feedback
               </div>
               <form action="#">
                  <div className="field">
                     <input type="text" name='name' required ref={title} />
                     <span className="fas fa-user"></span>
                     <label>Feedback Title</label>
                     
                  </div>
                  <div className="field">
                     <input type="text" name="email" required ref={category}  />
                     <span className="fas fa-user"></span>
                     <label>Category</label>
                     
                  </div>
                  <div className="field">
                     <input type="text"  required ref={details} />
                     <span className="fas fa-lock"></span>
                     <label>Feedback Details</label>
                  </div>
                  <div className="button-box">
                  <button  >Cancel</button>   <button onClick={addfeedback} >Add feedback</button>
                  </div>
                 

                  
               </form>
            </div>
         </div>
    );
};

export default Suggestions