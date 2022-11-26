import { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';

function NavbarCustom() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');

    if (user) setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    history.push('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
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
        {currentUser && (
          <Button style={{ marginLeft: '5px' }} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
