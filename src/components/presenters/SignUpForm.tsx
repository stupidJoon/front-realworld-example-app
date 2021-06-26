import { Button, Col, Form, Row } from 'react-bootstrap';

function SignUpForm() {
  return (
    <Form>
      <Form.Group className="py-3">
        <Form.Control size="lg" type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control size="lg" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Control size="lg" type="password" placeholder="Password" />
      </Form.Group>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Button size="lg" type="submit">
            Sign up
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SignUpForm;
