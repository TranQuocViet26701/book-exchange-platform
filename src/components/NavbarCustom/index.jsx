import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';

function NavbarCustom() {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="SM logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/create-book">
            Books
          </Nav.Link>
        </Nav>
        <Button onClick={() => history.push('/login')}>Login</Button>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
