import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Link } from 'react-router-dom';

function MainLayout(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            React Blog
          </Link>
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default MainLayout;
