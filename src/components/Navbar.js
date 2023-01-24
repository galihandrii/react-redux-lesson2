import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../Redux/Action/authAction';




const Navbarcom = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const handleIsLogout = () => {
      dispatch(handleLogout())
  }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Redux</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Discovery'>Discovery</Nav.Link>
            <Nav.Link href='/Login'>Login</Nav.Link>
            <Nav.Link href='/Register'>Register</Nav.Link>
            {
                        token != null ? (
                            <Nav.Link>
                                <button onClick={handleIsLogout}>Log Out</button>
                            </Nav.Link>
                        ):null
                    }
            
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Navbarcom;