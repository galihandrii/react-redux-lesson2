import Navbarcom from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import { useDispatch, useSelector } from "react-redux";
import { handleLoginAction } from "../Redux/Action/authAction";
import { useEffect,useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import rootReducer from "../Redux/Reducer";

const Login = () => {
  const state = useSelector(rootReducer => rootReducer);  
  //console.log(state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const handleEmail = (e) => {
      setEmail(e.target.value)
  }

  const [password, setPassword] = useState("")
  const handlePassword = (e) => { 
      setPassword(e.target.value)
  }

  const dispatch = useDispatch()

  const handleLogin = () => {
    const payLoad = {
        email: email,
        password: password
    }
    console.log(payLoad);
    dispatch(handleLoginAction(payLoad))

         
}

const handleRedirect = () => {
    setTimeout(()=>{
        if (state.auth.message === true){
            navigate('/')
         }
    },1000);
    
}
useEffect(()=>{
    handleRedirect();
  },[state.auth.message]);



    return (
        <div>
            <div>
            <Navbarcom/>
            </div>
            <div className="login-bottom">
              <h1>Login Page</h1>
           
                        <div className="register-section">
                            <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                          <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                         <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                         <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                          </Form.Group>
                          <Button onClick={handleLogin} variant="primary">
                              Login
                            </Button>
                           </Form>
                        </div>
                    
                
            
            </div>
           
            
        </div>
    )
}

export default Login;