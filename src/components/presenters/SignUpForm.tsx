import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Errors {
  username?: Array<string>;
  email?: Array<string>;
  password?: Array<string>;
}

interface Props {
  username: string;
  email: string;
  password: string;
  errors: Errors;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent) => void;
}

function SignUpForm({
  username,
  email,
  password,
  onChange,
  onSubmit,
  errors,
}: Props) {
  return (
    <>
      {errors.username && (
        <Row>
          <Col xs="auto">
            <ul>
              <li className="text-danger">{`username ${errors.username[0]}`}</li>
            </ul>
          </Col>
        </Row>
      )}
      {errors.email && (
        <Row>
          <Col xs="auto">
            <ul>
              <li className="text-danger">{`email ${errors.email[0]}`}</li>
            </ul>
          </Col>
        </Row>
      )}
      {errors.password && (
        <Row>
          <Col xs="auto">
            <ul>
              <li className="text-danger">{`password ${errors.password[0]}`}</li>
            </ul>
          </Col>
        </Row>
      )}
      <Form onSubmit={onSubmit}>
        <Form.Group className="py-3">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control
            size="lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button size="lg" type="submit">
              Sign up
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default SignUpForm;
