import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Navbarcom = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Redux</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Login'>Login</Nav.Link>
            <Nav.Link href='/Register'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Navbarcom;