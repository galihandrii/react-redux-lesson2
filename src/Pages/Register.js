import { useSelector, useDispatch } from "react-redux";
import Navbarcom from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Register = () => {
const {regisReducer} = useSelector((state)=>state);
//console.log(regisReducer.message);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const handlePassword = (e) => {
    setPassword(e.target.value);
}
const handleEmail = (e) => {
    setEmail(e.target.value);
   // console.log(setEmail)
}

const handleRegis = ( ) => {
    const payload = {
        email:email,
        password: password,
        role: "admin"
    }
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
      <Button onClick={handleRegis} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
            <div>
                {regisReducer.message.length ? <h1>{regisReducer.message}</h1>:null} 
            </div>
        </div>
    )
}

export default Register;