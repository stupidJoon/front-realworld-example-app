import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

interface Props {
  email: string;
  password: string;
  isFailed: boolean;
  onSubmit: (event: React.SyntheticEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function LoginForm({ email, password, isFailed, onSubmit, onChange }: Props) {
  return (
    <>
      {isFailed && (
        <Row>
          <Col xs="auto">
            <ul>
              <li className="text-danger">email or password is invalid</li>
            </ul>
          </Col>
        </Row>
      )}
      <Form onSubmit={onSubmit}>
        <Form.Group className="pb-3">
          <Form.Control
            size="lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
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
    </>
  );
}

export default LoginForm;
