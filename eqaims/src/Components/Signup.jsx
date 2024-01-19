import  { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"
import Navbar from './Navbar'

const Signup = () => {
let navigate=useNavigate()

    let name = useRef()
   let email = useRef()
   let password = useRef()

let signuppage = (e)=>{
    e.preventDefault()

    let data = JSON.stringify({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/user/signup',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    
      navigate("log")
    })
    .catch((error) => {
      console.log(error);
    });
   
}

  return (
    <div>
           
    <div className="mainbody">

    <div className="content">
       <div className="text">
          Signup Form
       </div>
       <form action="#">
          <div className="field">
             <input type="text" name='name'  ref={name} required />
             <span className="fas fa-user"></span>
             <label>Name</label>
          </div>
          <div className="field">
             <input type="text" name="email"  ref={email} required />
             <span className="fas fa-user"></span>
             <label>Email</label>
          </div>
          <div className="field">
             <input type="password" name='password'  ref={password} required />
             <span className="fas fa-lock"></span>
             <label>Password</label>
          </div>
          <button onClick={signuppage} >Sign Up</button>
          <div className="sign-up">
             Already have an Account?
             <Link to="/log">Login now </Link>
          </div>
       </form>
    </div>
 </div>
 </div>
  )
}

export default Signup