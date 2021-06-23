import Link from 'next/link';
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useUser from 'hooks/useUser';
import UserContext from 'contexts/UserContext';
import Gnb from 'components/presenters/Gnb';
import LoginForm from 'components/containers/LoginForm';

function Signin() {
  useUser();
  const { user } = useContext(UserContext);
  return (
    <>
      <Gnb user={user} />
      <Container>
        <Row className="justify-content-center">
          <Col xs="6" className="text-center">
            <h1>Sign in</h1>
            <Link href="/signup">
              <a className="text-decoration-none">Need an account?</a>
            </Link>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signin;
