import SignUpForm from 'components/containers/SignUpForm';
import Gnb from 'components/presenters/Gnb';
import UserContext from 'contexts/UserContext';
import useUser from 'hooks/useUser';
import Link from 'next/link';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Signup() {
  useUser();
  const { user } = useContext(UserContext);
  return (
    <>
      <Gnb user={user} />
      <Container>
        <Row className="justify-content-center">
          <Col xs="6" className="text-center">
            <h1>Sign up</h1>
            <Link href="/signin">
              <a className="text-decoration-none">Have an account?</a>
            </Link>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
