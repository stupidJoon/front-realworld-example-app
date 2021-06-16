import { Container, Navbar, Nav } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Navbar className="justify-content-between">
        <Navbar.Brand>conduit</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link className="text-dark">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Sign in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Sign up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Home;
