import { useDispatch, useSelector } from "react-redux";
import Navbarcom from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import { useState } from "react";
import { regisAction } from "../Redux/Action/regisaction";



const Register = () => {
const state = useSelector((rootReducer)=>rootReducer);
console.log(state);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handlePassword = (e) => {
    setPassword(e.target.value);
}
const handleEmail = (e) => {
    setEmail(e.target.value);
   // console.log(setEmail)
}

const dispatch = useDispatch()

const handleRegis = () => {
    const payload = {
        email:email,
        password: password,
        role: "admin"
    }
    console.log(payload)

    dispatch(regisAction(payload))
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
                {/* {regisReducer.message.length ? <h1>{regisReducer.message}</h1>:null}  */}
            </div>
        </div>
    )
}

export default Register;