import React, { useRef } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios  from 'axios';


const Login = () => {

    let navigate =useNavigate()

    let email = useRef()
   let password = useRef()

    let loginpage=(e)=>{
        e.preventDefault()

        let data = JSON.stringify({
            email: email.current.value,
            password: password.current.value
          });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/user/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.data));
    
      localStorage.setItem("token", response.data.data)
      navigate("/feedback")
    })
    .catch((error) => {
      console.log(error);
    }); 

    }
   
    

  return (
    <div className="mainbody">

    <div className="content">
       <div className="text">
          Login Form
       </div>
       <form action="#">
          <div className="field">
             <input type="text" name="email" required ref={email} />
             <span className="fas fa-user"></span>
             <label>Email</label>
          </div>
          <div className="field">
             <input type="password" password="password" required ref={password} />
             <span className="fas fa-lock"></span>
             <label>Password</label>
          </div>
          <div className="forgot-pass">
             <Link to="/resetpass">Forgot Password?</Link>
          </div>
          <button onClick={loginpage} >Login</button>
          <div className="sign-up">
             Not a member?
             <Link to="/" >signup now</Link>
          </div>
       </form>
    </div>
 </div>
  )
}

export default Login