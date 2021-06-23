import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';
import UserType from 'types/User';

interface Props {
  user: UserType;
}

function Gnb({ user }: Props) {
  return (
    <Container>
      <Navbar className="justify-content-between">
        <Navbar.Brand className="fs-3 fw-bold text-primary">
          <Link href="/">
            <a className="text-decoration-none">conduit</a>
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
          </Nav.Item>
          {user ? (
            <>
              <Nav.Item>
                <Link href="/editor" passHref>
                  <Nav.Link>📝 New Article</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/settings" passHref>
                  <Nav.Link>⚙️ Settings</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={`@${user.username}`} passHref>
                  <Nav.Link>{user.username}</Nav.Link>
                </Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Link href="/signin" passHref>
                  <Nav.Link>Sign in</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/signup" passHref>
                  <Nav.Link>Sign up</Nav.Link>
                </Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Gnb;
