import Navbarcom from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import { useDispatch } from "react-redux";
import { loginAction } from "../Redux/Action/loginaction";
import { useEffect,useState } from "react";


const Login = () => {
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

    dispatch(loginAction(payLoad))

    // axios
    //     .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payLoad)
    //     .then((ress) => {
    //         console.log(ress)
    //         localStorage.setItem("token", ress.data.access_token);
    //         navigate("/discovery")
    //     })
    //     .catch((err) => console.log(err.message))
}

const [isLogin, setIsLogin] = useState(false)
useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null){
        setIsLogin(false)
    } else {
        setIsLogin(true)
    }
},[])

const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload(false)
}

    return (
        <div>
            <div>
            <Navbarcom/>
            </div>
            <div className="login-bottom">
              <h1>Login Page</h1>
            {
                    isLogin ? (
                        <div className="register-section">
                           <Button onClick={handleLogout} variant="primary" type="submit">
                              Submit
                            </Button>
                        </div>
                    ):(
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
                          <Button onClick={handleLogin} variant="primary" type="submit">
                              Login
                            </Button>
                           </Form>
                        </div>
                    )
                }
            
            </div>
            {
                isLogin ? <h1>Selamat datang di Ind****** selamat belanja</h1>: <p>silahkan login</p>
            }
            
        </div>
    )
}

export default Login;