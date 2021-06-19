import Link from 'next/link';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Gnb from 'components/Gnb';

function Signin() {
  return (
    <>
      <Gnb />
      <Container>
        <Row className="justify-content-center">
          <Col xs="6" className="text-center">
            <h1>Sign in</h1>
            <Link href="/signup">
              <a className="text-decoration-none">Need an account?</a>
            </Link>
            <Form>
              <Form.Group className="py-3">
                <Form.Control size="lg" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="pb-3">
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Row className="justify-content-end">
                <Col xs="auto">
                  <Button size="lg" type="submit">
                    Sign in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signin;
