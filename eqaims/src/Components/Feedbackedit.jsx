import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'


const Feedbackedit = () => {

    let [editlist, seteditlist] = useState([])
    let {id}=useParams()
    let navigate =useNavigate()


    let title = useRef()
let category = useRef()
let details = useRef()

useEffect(() => {
    async function gettask(){
      try{
        let response= await axios.get(`http://localhost:4000/api/suggestion/edit/${id}`,{
          headers:{
            Authorization : "Bearer "+ localStorage.getItem("token")
          }
        })
        console.log(response.data.data);
        seteditlist(response.data.data);
      }
      catch(err){
        console.log(err);
      }
  
    }
    gettask()
    }, [])

    

  let editfeedback =(e)=>{
    e.preventDefault()
              
        let data = JSON.stringify({
            title: title.current.value,
            category: category.current.value,
            details: details.current.value
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:4000/api/suggestion/edit/${id}`,editlist,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                seteditlist(response.data.data);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });

        }





    return (
        <div className="mainbody">

            <div className="content">
                <div className="text">
                    Edit Feedback
                </div>
                <form action="#">
                    <div className="field">
                        <input type="text" name='name' required ref={title} />
                        <span className="fas fa-user"></span>
                        <label>Feedback Title</label>

                    </div>
                    <div className="field">
                        <input type="text" name="email" required ref={category} />
                        <span className="fas fa-user"></span>
                        <label>Category</label>

                    </div>
                    <div className="field">
                        <input type="text" required ref={details} />
                        <span className="fas fa-lock"></span>
                        <label>Feedback Details</label>
                    </div>
                    <div className="button-box">
                        <button  >Cancel</button>   <button onClick={editfeedback} >save changes</button>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Feedbackedit