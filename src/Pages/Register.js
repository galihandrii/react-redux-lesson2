import { useSelector, useDispatch } from "react-redux";
import Navbarcom from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regisAction } from "../Redux/Action/regisaction";
import { regisReducer } from "../Redux/Reducer/Regisreducers";



const Register = () => {
const state = useSelector((rootReducers)=>rootReducers);
//console.log(state);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const dispatch = useDispatch();


useEffect(()=>{
  handleRedirect();
},[state.regis.message]);

//navigate to login page after register
const handleRedirect = () => {
  //delay 2 second navigate buat show message 'created'
  setTimeout(()=> {
    if (!!state.regis.message.length){
      navigate('/Login')
    }
    //mengkosongkan state message supaya bisa akses halaman register
    dispatch({
      type:'REMOVE_MESSAGE',
      payload:'',
    })
    
  }, 2000);
};


const handlePassword = (e) => {
    setPassword(e.target.value);
    
}
const handleEmail = (e) => {
    setEmail(e.target.value);
  
}

const handleRegis = ( ) => {
    const payload = {
        email:email,
        password: password,
        role: "admin"
    }
    dispatch(regisAction(payload));
    console.log(payload)
    
}



    return (
        <div>
            <div>
            <Navbarcom/>
            </div>
            <div className="regis-bottom">
            <h1>Register Page </h1>
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
      <Button onClick={handleRegis} variant="primary">
        Submit
      </Button>
    </Form>
            </div>
            <div>
                {state.regis.message.length ? <h1>{state.regis.message}</h1>:null} 
            </div>
        </div>
    )
}

export default Register;